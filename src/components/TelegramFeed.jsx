import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function TelegramFeed() {
  const { t, i18n } = useTranslation();
  const [originalPosts, setOriginalPosts] = useState([]);
  const [displayPosts, setDisplayPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [translating, setTranslating] = useState(false);
  const [error, setError] = useState(null);

  const CHANNEL_USERNAME = 'BAHIRDARAC';

  // 1. Fetch the raw Telegram posts
  useEffect(() => {
    const fetchTelegramFeed = async () => {
      const targetUrl = `https://t.me/s/${CHANNEL_USERNAME}`;
      
      const proxies = [
        `https://api.allorigins.win/get?url=${encodeURIComponent(targetUrl)}`,
        `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(targetUrl)}`,
        `https://corsproxy.io/?${encodeURIComponent(targetUrl)}`
      ];

      let html = null;

      for (const proxyUrl of proxies) {
        try {
          const response = await fetch(proxyUrl);
          if (!response.ok) continue;
          
          if (proxyUrl.includes('allorigins')) {
            const data = await response.json();
            html = data.contents;
          } else {
            html = await response.text();
          }
          
          if (html && html.includes('tgme_widget_message_wrap')) {
            break;
          }
        } catch (e) {
          console.warn("Proxy failed:", proxyUrl);
        }
      }

      if (!html || !html.includes('tgme_widget_message_wrap')) {
         setError('Network issue: Could not load updates. Please check your internet connection or view directly on Telegram.');
         setLoading(false);
         return;
      }
      
      try {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        
        const messageElements = Array.from(doc.querySelectorAll('.tgme_widget_message_wrap'));
        
        const recentMessages = messageElements.slice(-3).reverse().map(wrap => {
          const textElement = wrap.querySelector('.tgme_widget_message_text');
          const dateElement = wrap.querySelector('.tgme_widget_message_date time');
          const linkElement = wrap.querySelector('.tgme_widget_message_date');
          
          let imageUrl = null;
          const photoWrap = wrap.querySelector('.tgme_widget_message_photo_wrap, .tgme_widget_message_video_thumb');
          if (photoWrap) {
             const style = photoWrap.getAttribute('style');
             if (style) {
                const match = style.match(/background-image:\s*url\(['"]?([^'"]+)['"]?\)/i);
                if (match) imageUrl = match[1];
             }
          }

          if (!imageUrl) {
             const imgs = Array.from(wrap.querySelectorAll('img'));
             const mainImg = imgs.find(img => !img.className.includes('emoji'));
             if (mainImg) imageUrl = mainImg.src;
          }

          // Extract plain text and preserve newlines for translation
          let plainText = '';
          if (textElement) {
            const clone = textElement.cloneNode(true);
            const brs = clone.querySelectorAll('br');
            brs.forEach(br => br.replaceWith('\n'));
            plainText = clone.textContent;
          }

          return {
            htmlText: textElement ? textElement.innerHTML : '',
            plainText: plainText,
            date: dateElement ? dateElement.getAttribute('datetime') : new Date().toISOString(),
            link: linkElement ? linkElement.href : `https://t.me/${CHANNEL_USERNAME}`,
            imageUrl: imageUrl
          };
        });

        if (recentMessages.length === 0) {
           throw new Error('No messages found in the HTML');
        }

        setOriginalPosts(recentMessages);
        setDisplayPosts(recentMessages);
        setLoading(false);
      } catch (err) {
        console.error('Error parsing Telegram HTML:', err);
        setError('Error loading posts. Please view our channel directly.');
        setLoading(false);
      }
    };

    fetchTelegramFeed();
  }, []);

  // 2. Translate the posts when language changes
  const translatePosts = async () => {
    // If language is English, just show original HTML formatting
    if (!i18n.language || i18n.language.startsWith('en')) {
      setDisplayPosts(originalPosts);
      return;
    }

    setTranslating(true);
    try {
      const translated = await Promise.all(originalPosts.map(async (post) => {
        if (!post.plainText || post.plainText.trim() === '') return post;
        
        try {
          const targetLang = i18n.language.split('-')[0]; // Extract 'am', 'om', etc.
          const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLang}&dt=t&q=${encodeURIComponent(post.plainText)}`;
          
          const res = await fetch(url);
          const data = await res.json();
          
          // Reconstruct the translated text
          const translatedText = data[0].map(item => item[0]).join('');
          
          return {
            ...post,
            // Replace newlines back with <br/> for HTML rendering
            htmlText: translatedText.replace(/\n/g, '<br/>')
          };
        } catch (e) {
          console.error("Translation failed for a post:", e);
          return post; // Fallback to original text if API fails
        }
      }));
      
      setDisplayPosts(translated);
    } catch (e) {
      console.error("Translation process error:", e);
    } finally {
      setTranslating(false);
    }
  };

  useEffect(() => {
    if (originalPosts.length > 0) {
      translatePosts();
    }
  }, [i18n.language, originalPosts]);
  return (
    <section id="updates" className="telegram-section section">
      <div className="container">
        <div className="section-header">
          <h2>{t('telegram.title', 'Latest ')}<span className="highlight">{t('telegram.title_highlight', 'Updates')}</span></h2>
          <p>{t('telegram.subtitle', 'Stay connected with our latest announcements from Telegram.')}</p>
        </div>

        {loading ? (
          <div className="loading-state">
            <div className="spinner"></div>
            <p>{t('telegram.loading', 'Fetching updates...')}</p>
          </div>
        ) : error ? (
          <div className="error-state">
            <p>{t('telegram.error', error)}</p>
            <a href={`https://t.me/s/${CHANNEL_USERNAME}`} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              {t('telegram.view_channel', 'View on Telegram')}
            </a>
          </div>
        ) : (
          <div className="event-grid">
            {displayPosts.map((post, index) => (
              <div key={index} className="event-card">
                <div className="event-card-date">
                  <span className="date-icon">✈️</span> {new Date(post.date).toLocaleDateString()}
                </div>
                
                {post.imageUrl && (
                  <img src={post.imageUrl} alt="Telegram update" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '12px', marginBottom: '16px' }} />
                )}
                
                <div 
                  className="telegram-content" 
                  style={{ opacity: translating ? 0.5 : 1 }} 
                  dangerouslySetInnerHTML={{ __html: post.htmlText }} 
                />
                <a href={post.link} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-full">
                  {t('telegram.read_more', 'Read on Telegram')}
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
