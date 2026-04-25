import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        title: "Bahir Dar <br /> American Corner",
        home: "Home",
        events: "Events",
        book: "Book",
        contact: "Contact",
        contact_popup: "Leave a Message",
        about: "About Us",
        login: "Login",
        hi: "Hi",
        logout: "Logout"
      },
      hero: {
        badge: "Welcome to American Corner",
        title1: "Discover. Learn. ",
        title_highlight: "Connect.",
        subtitle: "Join events, workshops, and programs at American Corner Bahir Dar. Empowering the community through education and collaboration.",
        explore: "Explore Events",
        book: "Book a Seat"
      },
      events: {
        title: "Upcoming ",
        title_highlight: "Events",
        subtitle: "Don't miss out on our latest programs and workshops.",
        book_now: "Book Now"
      },
      booking: {
        title: "Reserve Your ",
        title_highlight: "Seat",
        subtitle: "Spaces are limited for our popular events. Book your spot in advance to guarantee entry.",
        benefit1: "Free access to all resources",
        benefit2: "Networking opportunities",
        benefit3: "Expert-led workshops",
        name_label: "Full Name",
        name_placeholder: "John Doe",
        email_label: "Email Address",
        email_placeholder: "john@example.com",
        event_label: "Select Event",
        event_placeholder: "Choose an event...",
        password_label: "Password / Access Code",
        password_placeholder: "Enter password or access code",
        confirm: "Confirm Booking",
        processing: "Processing...",
        success_title: "Booking Confirmed!",
        success_message: "Thank you for registering! We have sent a confirmation email to your address with further details about the session.",
        login_required_title: "Login Required",
        login_required_msg: "Please sign in to your account to book a seat for our upcoming events.",
        book_another: "Book Another Event"
      },
      footer: {
        brand: "American Corner",
        brand_highlight: "Bahir Dar",
        tagline: "Empowering minds, connecting communities.",
        quick_links: "Quick Links",
        contact_us: "Contact Us",
        hours_title: "Opening Hours",
        mon_fri: "Monday – Friday: 09:00 AM – 06:00 PM",
        sat: "Saturday: 09:00 AM – 03:00 PM",
        lunch_break: "(Lunch break: 12:00 PM – 01:00 PM)",
        rights: "American Corner Bahir Dar. All rights reserved.",
        location: "Bahir Dar, Ethiopia"
      },
      about: {
        title: "About ",
        title_highlight: "Us",
        p1: "The Bahir Dar American Corner (BDAC) is an American Space supported by the U.S. Embassy in Ethiopia and hosted at Aba Mengesha Geneme Public Library and Information Resource Center in the heart of Bahir Dar, near Fasilo School.",
        f1: "BDAC provides a dynamic learning environment equipped with a computer lab, MakerSpace, and video conferencing facilities that connect local audiences with global digital programs.",
        f2: "We offer free access to cutting-edge technology training, leadership and entrepreneurship development, and reliable information about U.S. culture, education, and society.",
        mission_title: "Our Mission",
        mission_text: "To empower the community by enhancing digital skills, encouraging innovation, and creating opportunities for learning and collaboration.",
        stat_free: "Free Access",
        stat_global: "Global Connections"
      },
      auth: {
        login_title: "Welcome Back",
        register_title: "Join Our Community",
        login_subtitle: "Sign in to access your account",
        register_subtitle: "Create an account to book events and stay updated",
        full_name: "Full Name",
        email: "Email Address",
        password: "Password",
        sign_in: "Sign In",
        create_account: "Create Account",
        no_account: "Don't have an account? ",
        has_account: "Already have an account? ",
        sign_up: "Sign up",
        log_in: "Log in",
        processing: "Processing..."
      },
      app_events: {
        e1_title: "Digital Marketing Workshop",
        e1_desc: "Learn modern marketing skills, SEO, and social media strategies from industry experts.",
        e1_date: "May 5, 2026",
        e2_title: "English Conversation Club",
        e2_desc: "Improve your speaking confidence in a friendly, supportive environment.",
        e2_date: "May 8, 2026",
        e3_title: "Coding Bootcamp",
        e3_desc: "Introduction to web development. Build your first website using HTML, CSS, and React.",
        e3_date: "May 12, 2026",
        e4_title: "Entrepreneurship Seminar",
        e4_desc: "Discover how to turn your ideas into a successful business in the digital age.",
        e4_date: "May 15, 2026"
      },
      telegram: {
        title: "Latest ",
        title_highlight: "Updates",
        subtitle: "Stay connected with our latest announcements from Telegram.",
        error: "Network issue: Could not load updates. Please check your internet connection or view directly on Telegram.",
        view_channel: "View on Telegram",
        translate_all: "Translate to Local Language",
        loading: "Fetching updates...",
        read_more: "Read on Telegram"
      },
      contact: {
        title: "Get In ",
        title_highlight: "Touch",
        subtitle: "Have questions? We are here to help you connect with the world.",
        modal_title: "Send us a ",
        modal_highlight: "Message",
        modal_subtitle: "We would love to hear from you!",
        cta_title: "Want to leave a comment?",
        cta_subtitle: "Click the button below to send us a direct message or feedback.",
        cta_button: "Leave a Message",
        address_label: "Address",
        email_label: "Email",
        phone_label: "Phone",
        form_name: "Your Name",
        form_email: "Your Email",
        form_message: "Message",
        form_placeholder: "How can we help you?",
        success_title: "Message Sent!",
        success_message: "We have received your message and will get back to you shortly.",
        sending: "Sending...",
        submit: "Send Message"
      },
      telegram: {
        title: "Latest ",
        title_highlight: "Updates",
        subtitle: "Stay connected with our latest announcements from Telegram.",
        loading: "Loading updates...",
        view_on: "View on Telegram",
        translating: "Translating feed..."
      }
    }
  },
  am: {
    translation: {
      nav: {
        title: "ባህር ዳር <br /> አሜሪካን ኮርነር",
        home: "ዋና ገጽ",
        events: "ክንውኖች",
        book: "ቦታ ይያዙ",
        contact: "ያግኙን",
        about: "ስለ እኛ",
        login: "ይግቡ",
        hi: "ሰላም",
        logout: "ውጣ"
      },
      hero: {
        badge: "ወደ አሜሪካን ኮርነር እንኳን በደህና መጡ",
        title1: "ያግኙ። ይማሩ። ",
        title_highlight: "ይገናኙ።",
        subtitle: "በባህር ዳር አሜሪካን ኮርነር ዝግጅቶች፣ ስልጠናዎች እና ፕሮግራሞች ይቀላቀሉ። ማህበረሰቡን በትምህርት እና ትብብር ማብቃት።",
        explore: "ክንውኖችን ያስሱ",
        book: "ቦታ ይያዙ"
      },
      events: {
        title: "መጪ ",
        title_highlight: "ክንውኖች",
        subtitle: "አዳዲስ ፕሮግራሞቻችንን እና ስልጠናዎቻችንን እንዳያመልጥዎ።",
        book_now: "አሁን ቦታ ይያዙ"
      },
      booking: {
        title: "የእርስዎን ",
        title_highlight: "ቦታ ይያዙ",
        subtitle: "ለታዋቂ ክንውኖቻችን ቦታዎች የተገደቡ ናቸው። መግባትዎን ለማረጋገጥ አስቀድመው ቦታ ይያዙ።",
        benefit1: "ለሁሉም ግብዓቶች ነፃ መዳረሻ",
        benefit2: "የግንኙነት እድሎች",
        benefit3: "በባለሙያ የሚመሩ ስልጠናዎች",
        name_label: "ሙሉ ስም",
        name_placeholder: "ዮሐንስ",
        email_label: "የኢሜል አድራሻ",
        email_placeholder: "yohannes@example.com",
        event_label: "ዝግጅት ይምረጡ",
        event_placeholder: "ዝግጅት ይምረጡ...",
        password_label: "የይለፍ ቃል / የመግቢያ ኮድ",
        password_placeholder: "የይለፍ ቃል ወይም ኮድ ያስገቡ",
        confirm: "ቦታ ማስያዝን ያረጋግጡ",
        processing: "በመካሄድ ላይ ነው...",
        success_title: "ቦታ ማስያዝ ተረጋግጧል!",
        success_message: "ስለተመዘገቡ እናመሰግናለን! ስለ ስልጠናው ዝርዝር መረጃ የያዘ የማረጋገጫ ኢሜይል ወደ አድራሻዎ ልከናል::",
        login_required_title: "መግባት ያስፈልጋል",
        login_required_msg: "ለሚመጡት ክንውኖች ቦታ ለመያዝ እባክዎ መጀመሪያ ወደ መለያዎ ይግቡ።",
        book_another: "ሌላ ቦታ ያስይዙ"
      },
      footer: {
        brand: "አሜሪካን ኮርነር",
        brand_highlight: "ባህር ዳር",
        tagline: "አእምሮን ማብቃት፣ ማህበረሰቦችን ማገናኘት።",
        quick_links: "ፈጣን አገናኞች",
        contact_us: "ያግኙን",
        hours_title: "የስራ ሰዓታት",
        mon_fri: "ሰኞ – አርብ፡ ከጠዋቱ 3፡00 – ከሰዓት 12፡00",
        sat: "ቅዳሜ፡ ከጠዋቱ 3፡00 – ቀኑ 9፡00",
        lunch_break: "(የምሳ እረፍት፡ ከቀኑ 6፡00 – 7፡00)",
        rights: "ባህር ዳር አሜሪካን ኮርነር። መብቱ በህግ የተጠበቀ ነው።",
        location: "ባህር ዳር፣ ኢትዮጵያ"
      },
      about: {
        title: "ስለ ",
        title_highlight: "እኛ",
        p1: "የባህር ዳር አሜሪካን ኮርነር (BDAC) በኢትዮጵያ የአሜሪካ ኤምባሲ የሚደገፍ እና በአባ መንገሻ ገነሜ የህዝብ ቤተ መጻህፍት እና የመረጃ ምንጭ ማዕከል ውስጥ የሚገኝ የአሜሪካ ስፔስ ነው።",
        f1: "BDAC የኮምፒዩተር ላብራቶሪ፣ ሜከር ስፔስ እና የቪዲዮ ኮንፈረንስ ፋሲሊቲዎች የታጠቀ ተለዋዋጭ የትምህርት አካባቢን ይሰጣል።",
        f2: "እጅግ ዘመናዊ የቴክኖሎጂ ስልጠና፣ የአመራር እና የስራ ፈጠራ ልማት እና ስለ አሜሪካ ባህል፣ ትምህርት እና ማህበረሰብ አስተማማኝ መረጃ በነጻ እንሰጣለን።",
        mission_title: "ተልዕኳችን",
        mission_text: "የዲጂታል ክህሎቶችን በማሳደግ፣ ፈጠራን በማበረታታት እና ለመማር እና ለትብብር እድሎችን በመፍጠር ማህበረሰቡን ማብቃት።",
        stat_free: "ነጻ መዳረሻ",
        stat_global: "ዓለም አቀፍ ግንኙነቶች"
      },
      auth: {
        login_title: "እንኳን ደህና መጡ",
        register_title: "ማህበረሰባችንን ይቀላቀሉ",
        login_subtitle: "ወደ መለያዎ ለመግባት ይግቡ",
        register_subtitle: "ዝግጅቶችን ለመያዝ እና ወቅታዊ መረጃዎችን ለማግኘት መለያ ይፍጠሩ",
        full_name: "ሙሉ ስም",
        email: "የኢሜል አድራሻ",
        password: "የይለፍ ቃል",
        sign_in: "ይግቡ",
        create_account: "መለያ ይፍጠሩ",
        no_account: "መለያ የለዎትም? ",
        has_account: "ቀድሞውኑ መለያ አለዎት? ",
        sign_up: "ይመዝገቡ",
        log_in: "ይግቡ",
        processing: "በመካሄድ ላይ ነው..."
      },
      app_events: {
        e1_title: "የዲጂታል ግብይት ስልጠና",
        e1_desc: "ዘመናዊ የግብይት ክህሎቶችን፣ የፍለጋ ሞተር ማሻሻያ (SEO) እና የማህበራዊ ሚዲያ ስልቶችን ከባለሙያዎች ይማሩ።",
        e2_title: "የእንግሊዝኛ የውይይት ክበብ",
        e2_desc: "ወዳጃዊ እና አጋዥ በሆነ አካባቢ የንግግር በራስ መተማመንዎን ያሻሽሉ።",
        e3_title: "የኮዲንግ ስልጠና",
        e3_desc: "የድር ልማት መግቢያ። ኤችቲኤምኤል(HTML)፣ ሲኤስኤስ(CSS) እና ሪአክት(React) በመጠቀም የመጀመሪያዎን ድር ጣቢያ ይገንቡ።",
        e4_title: "የስራ ፈጠራ ሴሚናር",
        e4_desc: "በዲጂታል ዘመን ሀሳቦችዎን ወደ ስኬታማ ንግድ እንዴት እንደሚቀይሩ ያግኙ።"
      },
      telegram: {
        title: "የቅርብ ጊዜ ",
        title_highlight: "ዜናዎች",
        subtitle: "ከቴሌግራም የሚወጡ የቅርብ ጊዜ ማስታወቂያዎቻችንን ይከታተሉ።",
        error: "የኔትወርክ ችግር፡ መረጃዎችን መጫን አልተቻለም። እባክዎ የበይነመረብ ግንኙነትዎን ያረጋግጡ።",
        view_channel: "በቴሌግራም ይመልከቱ",
        translate_all: "ወደ አማርኛ ይተርጉሙ",
        loading: "መረጃዎችን በማምጣት ላይ...",
        read_more: "በቴሌግራም ያንብቡ"
      },
      contact: {
        title: "ያግኙን",
        title_highlight: "",
        subtitle: "ጥያቄ አለዎት? እኛ እርስዎን ከዓለም ጋር ለማገናኘት እዚህ ነን።",
        modal_title: "መልእክት ",
        modal_highlight: "ይላኩልን",
        modal_subtitle: "ከእርስዎ መስማት እንወዳለን!",
        cta_title: "አስተያየት መስጠት ይፈልጋሉ?",
        cta_subtitle: "ቀጥተኛ መልእክት ወይም ግብረመልስ ለመላክ ከታች ያለውን ቁልፍ ይጫኑ።",
        cta_button: "መልእክት ይተው",
        address_label: "አድራሻ",
        email_label: "ኢሜይል",
        phone_label: "ስልክ",
        form_name: "የእርስዎ ስም",
        form_email: "የእርስዎ ኢሜይል",
        form_message: "መልእክት",
        success_title: "መልእክት ተልኳል!",
        success_message: "መልእክትዎን ተቀብለናል፣ በቅርቡ ምላሽ እንሰጥዎታለን።",
        sending: "በመላክ ላይ...",
        submit: "መልእክት ላክ"
      }
    }
  },
  om: {
    translation: {
      nav: {
        title: "Baahir Daar <br /> Ameerikaan Kornar",
        home: "Galaa",
        events: "Qophiilee",
        book: "Bakka Qabadhu",
        contact: "Nu Quunnamaa",
        about: "Waa'ee Keenya",
        login: "Seeni"
      },
      hero: {
        badge: "Ameerikaan Kornaritti Baga Nagaan Duftan",
        title1: "Bari. Baradhu. ",
        title_highlight: "Wal Quunnami.",
        subtitle: "Qophiilee, leenjiiwwanii fi sagaleewwan Ameerikaan Kornar Baahir Daar irratti hirmaadhaa. Hawaasa barnootaa fi waltumsuun cimsuu.",
        explore: "Qophiilee Daawwadhu",
        book: "Bakka Qabadhu"
      },
      events: {
        title: "Qophiilee ",
        title_highlight: "Dhufan",
        subtitle: "Sagaleewwan fi leenjiiwwan keenya haaraa hin dabarsinaa.",
        book_now: "Amma Qabadhu"
      },
      booking: {
        title: "Bakka Kee ",
        title_highlight: "Qabadhu",
        subtitle: "Qophiilee keenya beekamoo ta'aniif bakkawwan murtaa'oodha. Seensa kee mirkaneeffachuuf dursee bakka qabadhu.",
        benefit1: "Qabeenyawwan hundatti kaffaltii malee fayyadamuu",
        benefit2: "Carraawwan walquunnamtii",
        benefit3: "Leenjiiwwan ogeeyyiin durfaman",
        name_label: "Maqaa Guutuu",
        name_placeholder: "Tolasaa",
        email_label: "Teessoo Imeelii",
        email_placeholder: "tolasaa@example.com",
        event_label: "Qophii Filadhu",
        event_placeholder: "Qophii filadhu...",
        confirm: "Bakka Qabachuu Mirkaneessi",
        processing: "Hojjetamaa jira...",
        success_title: "Bakka qabachuun mirkanaa'eera!",
        success_message: "Galmaa'uu keessaniif galatoomaa! Odeeffannoo dabalataa waa'ee leenjichaa of keessaa qabu Imeelii keessanitti erginee jirra.",
        book_another: "Qophii biraa qabadhu"
      },
      footer: {
        brand: "Ameerikaan Kornar",
        brand_highlight: "Baahir Daar",
        tagline: "Sammuu cimsuu, hawaasa walquunnamsiisuu.",
        quick_links: "Geessituuwwan Saffisaa",
        contact_us: "Nu Quunnamaa",
        hours_title: "Sa'aatii Hojii",
        mon_fri: "Wiixata – Jimmata: 09:00 AM – 06:00 PM",
        sat: "Sanbata: 09:00 AM – 03:00 PM",
        lunch_break: "(Boqonnaa laaqanaa: 12:00 PM – 01:00 PM)",
        rights: "Ameerikaan Kornar Baahir Daar. Mirgi hunduu eegamaadha."
      },
      app_events: {
        e1_title: "Leenjii Gabaa Dijitaalaa",
        e1_desc: "Ogummaa gabaa ammayyaa, SEO, fi tarsiimoo miidiyaa hawaasaa ogeeyyii irraa baradhu.",
        e2_title: "Gumii Marii Afaan Ingilizii",
        e2_desc: "Naannoo michummaa fi deeggarsa qabu keessatti of-itti amanamummaa dubbachuu kee fooyyessi.",
        e3_title: "Leenjii Koodiingii",
        e3_desc: "Seensa misoomsuu weebsaayitii. HTML, CSS, fi React fayyadamuun weebsaayitii kee jalqabaa ijaari.",
        e4_title: "Seminaara Hojii Uumuu",
        e4_desc: "Bara dijitaalaa kana keessatti yaadawwan kee akkamitti gara daldala milkaa'aatti akka jijjiirtu bari."
      },
      telegram: {
        title: "Odeeffannoowwan ",
        title_highlight: "Haaraa",
        subtitle: "Beeksisa keenya haaraa Telejiraamii irraa nu waliin hordofaa.",
        error: "Rakkina interneetii: Odeeffannoo fiduu hin dandeenye. Maaloo walquunnamtii interneetii keessan mirkaneeffadhaa.",
        view_channel: "Telejiraamii irratti ilaali",
        translate_all: "Gara Afaan Oromootti hiiki",
        loading: "Odeeffannoo fidaa jira...",
        read_more: "Telejiraamii irratti dubbisi"
      },
      about: {
        title: "Waa'ee ",
        title_highlight: "Keenya",
        p1: "Kornarri Ameerikaa Baahir Daar (BDAC) Ibsa Ameerikaa Imbaasii Yuunaayitid Isteetis Itoophiyaatti deeggaramu fi Mana Kitaabaa Ummataa fi Giddu-gala Odeeffannoo Abbaa Mangashaa Ganamee keessatti argamuudha.",
        f1: "BDAC naannoo barumsaa socho'aa ta'e kan laabiraatoorii koompiyutaraa, MakerSpace, fi tajaajila viidiyoo koonfaransii dandeessisu kan qabuudha.",
        f2: "Leenjii teknooloojii ammayyaa, misooma hoggansaa fi daldalaa, akkasumas odeeffannoo amansiisaa waa'ee aadaa fi barnoota Ameerikaa kaffaltii malee ni kennina.",
        mission_title: "Ergaa Keenya",
        mission_text: "Dandeettii dijiitaalaa guddisuu, kalaqa jajjabeessuu, fi carraawwan barumsaa fi walta'iinsaa uumuun hawaasa jabeessuu.",
        stat_free: "Kaffaltii Malee",
        stat_global: "Walquunnamtii Addunyaa"
      },
      auth: {
        login_title: "Welcome Back",
        register_title: "Join Our Community",
        login_subtitle: "Sign in to access your account",
        register_subtitle: "Create an account to book events and stay updated",
        full_name: "Full Name",
        email: "Email Address",
        password: "Password",
        sign_in: "Sign In",
        create_account: "Create Account",
        no_account: "Don't have an account? ",
        has_account: "Already have an account? ",
        sign_up: "Sign up",
        log_in: "Log in",
        processing: "Processing..."
      },
      contact: {
        title: "Nu ",
        title_highlight: "Quunnamaa",
        subtitle: "Gaaffii qabduu? Addunyaa waliin wal isini quunnamsiisuuf as jirra.",
        modal_title: "Ergaa ",
        modal_highlight: "Nuuf Ergaa",
        modal_subtitle: "Isin irraa dhaga'uu barbaadna!",
        cta_title: "Yaada kennuu barbaadduu?",
        cta_subtitle: "Ergaa kallattii ykn yaada kennuuf killee gadii cuqaasaa.",
        cta_button: "Ergaa dhiisi",
        address_label: "Teessoo",
        email_label: "Imeelii",
        phone_label: "Bilbila",
        form_name: "Maqaa Keessan",
        form_email: "Imeelii Keessan",
        form_message: "Ergaa",
        success_title: "Ergaan Ergameera!",
        success_message: "Ergaa keessan nu ga'eera, dhiyootti deebii isiniif kennina.",
        sending: "Ergamaa jira...",
        submit: "Ergaa Ergi"
      }
    }
  },
  ti: {
    translation: {
      nav: {
        title: "ባህር ዳር <br /> ኣሜሪካን ኮርነር",
        home: "ዳስ",
        events: "ፍጻመታት",
        book: "ቦታ ሓዝ",
        contact: "ርኸቡና",
        about: "ብዛዕባና",
        login: "እቶ"
      },
      hero: {
        badge: "ናብ ኣሜሪካን ኮርነር ብደሓን መጹ",
        title1: "ርኸቡ። ተምሃሩ። ",
        title_highlight: "ተራኸቡ።",
        subtitle: "ኣብ ባህር ዳር ኣሜሪካን ኮርነር ፍጻመታት፣ ስልጠናታትን መደባትን ተጸንበሩ። ንሕብረተሰብ ብትምህርትን ምትሕብባርን ምሕያል።",
        explore: "ፍጻመታት ዳህስስ",
        book: "ቦታ ሓዝ"
      },
      events: {
        title: "ዝመጹ ",
        title_highlight: "ፍጻመታት",
        subtitle: "ሓደስቲ መደባትናን ስልጠናታትናን ኣየምልጥኩም።",
        book_now: "ሕጂ ቦታ ሓዝ"
      },
      booking: {
        title: "ናይኩም ",
        title_highlight: "ቦታ ሓዙ",
        subtitle: "ንህቡባት ፍጻመታትና ቦታታት ድሩታት እዮም። መእተዊኹም ንምርግጋጽ ኣቐዲምኩም ቦታ ሓዙ።",
        benefit1: "ናብ ኩሉ ጸጋታት ብነጻ ምእታው",
        benefit2: "ናይ ርክብ ዕድላት",
        benefit3: "ብሰብ ሞያ ዝምርሑ ስልጠናታት",
        name_label: "ምሉእ ስም",
        name_placeholder: "ሃፍቶም",
        email_label: "ናይ ኢመይል ኣድራሻ",
        email_placeholder: "haftom@example.com",
        event_label: "ፍጻመ ምረጽ",
        event_placeholder: "ፍጻመ ምረጽ...",
        confirm: "ምሓዝ ቦታ ኣረጋግጽ",
        processing: "ይስራሕ ኣሎ...",
        success_title: "ምሓዝ ቦታ ተረጋጊጹ!",
        success_message: "ስለዝተመዝገብኩም ነመስግን! ብዛዕባቲ ስልጠና ዝያዳ ሓበሬታ ዝሓዘ ናይ ምርግጋጽ ኢመይል ናብ ኣድራሻኹም ሰዲድና ኣለና።",
        book_another: "ካልእ ቦታ ሓዙ"
      },
      footer: {
        brand: "ኣሜሪካን ኮርነር",
        brand_highlight: "ባህር ዳር",
        tagline: "ኣእምሮ ምሕያል፣ ማሕበረሰባት ምርኻብ።",
        quick_links: "ቅልጡፍ መላግቦታት",
        contact_us: "ርኸቡና",
        hours_title: "ናይ ስራሕ ሰዓታት",
        mon_fri: "ሰኑይ – ዓርቢ: 09:00 AM – 06:00 PM",
        sat: "ቀዳም: 09:00 AM – 03:00 PM",
        lunch_break: "(ዕረፍቲ ምስሓ: 12:00 PM – 01:00 PM)",
        rights: "ባህር ዳር ኣሜሪካን ኮርነር። ኩሉ መሰል ዝተሓለወ እዩ።"
      },
      app_events: {
        e1_title: "ናይ ዲጂታል ዕዳጋ ስልጠና",
        e1_desc: "ዘመናዊ ናይ ዕዳጋ ክእለታት፣ SEO፣ ናይ ማሕበራዊ ሚድያ ስትራተጂታት ካብ ሰብ ሞያ ተምሃሩ።",
        e2_title: "ናይ እንግሊዝኛ ዘተ ክለብ",
        e2_desc: "ኣብ ምቹእን ደጋፍን ሃዋህው ናይ ምዝራብ ተኣማንነትኩም ኣመሓይሹ።",
        e3_title: "ናይ ኮዲንግ ስልጠና",
        e3_desc: "መእተዊ ናብ መርበብ ሓበሬታ ምልማዕ። HTML, CSS, React ተጠቒምኩም ቀዳማይ መርበብ ሓበሬታኹም ህነጹ።",
        e4_title: "ናይ ስራሕ ፈጠራ ሰሚናር",
        e4_desc: "ኣብዚ ናይ ዲጂታል ዘመን ሓሳባትኩም ናብ ዕዉት ንግዲ ብኸመይ ከም እትቕይሩ ፍለጡ።"
      },
      telegram: {
        title: "ሓደስቲ ",
        title_highlight: "ሓበሬታታት",
        subtitle: "ካብ ቴሌግራም ዝወጹ ሓደስቲ መተሓሳሰቢታትና ይከታተሉ።",
        error: "ጸገም ኔትወርክ፡ ሓበሬታታት ምጽዓን ኣይተኻእለን። በጃኹም ናይ ኢንተርኔት ርክብኩም ኣረጋግጹ።",
        view_channel: "ኣብ ቴሌግራም ርኸቡ",
        translate_all: "ናብ ትግርኛ ተርጉም",
        loading: "ሓበሬታታት ይጽዓን ኣሎ...",
        read_more: "ኣብ ቴሌግራም ኣንብቡ"
      },
      about: {
        title: "ብዛዕባ ",
        title_highlight: "ኣዴና",
        p1: "ባህር ዳር ኣሜሪካን ኮርነር (BDAC) ብኤምባሲ ኣሜሪካ ኣብ ኢትዮጵያ ዝድገፍን ኣብ ቤተ መጻሕፍቲ ህዝቢ ኣባ መንገሻ ገነመን ማእከል ጸጋታት ሓበሬታን ዝርከብ ኣሜሪካን ስፔስ እዩ።",
        f1: "BDAC ላቦራቶሪ ኮምፒተር፣ ሜከር ስፔስን ንህዝቢ ምስ ዓለማዊ ዲጂታል መደባት ዘራኽብ ናይ ቪድዮ ኮንፈረንስን ዘጠቓለለ ንጡፍ ናይ ትምህርቲ ከባቢ የዳልው።",
        f2: "ናይ ቴክኖሎጂ ስልጠና፣ ልምዓት መሪሕነትን ስራሕ ፈጠራን፣ ከምኡ’ውን ብዛዕባ ባህሊ፣ ትምህርትን ሕብረተሰብን ኣሜሪካ እሙን ሓበሬታ ብነጻ ንህብ።",
        mission_title: "ዕላማና",
        mission_text: "ዲጂታል ክእለታት ብምዕባይ፣ ምህዞ ብምትብባዕን ንትምህርትን ምትሕብባርን ዕድላት ብምፍጣርን ንሕብረተሰብ ምብቃዕ።",
        stat_free: "ብነጻ",
        stat_global: "ዓለማዊ ርክባት"
      },
      auth: {
        login_title: "Welcome Back",
        register_title: "Join Our Community",
        login_subtitle: "Sign in to access your account",
        register_subtitle: "Create an account to book events and stay updated",
        full_name: "Full Name",
        email: "Email Address",
        password: "Password",
        sign_in: "Sign In",
        create_account: "Create Account",
        no_account: "Don't have an account? ",
        has_account: "Already have an account? ",
        sign_up: "Sign up",
        log_in: "Log in",
        processing: "Processing..."
      },
      contact: {
        title: "ርኸቡና",
        title_highlight: "",
        subtitle: "ጥያቄ ኣለኩም? ንሕና ንዓኹም ምስ ዓለም ንምርኻብ ኣብዚ ኣለና።",
        modal_title: "መልእኽቲ ",
        modal_highlight: "ስደዱልና",
        modal_subtitle: "ካባኹም ክንሰምዕ ንፈቱ!",
        cta_title: "ርእይቶ ክትህቡ ትደልዩ ዲኹም?",
        cta_subtitle: "ቀጥታ መልእኽቲ ወይ ርእይቶ ንምልኣኽ ነቲ ታሕቲ ዘሎ መጠውዒ ጠውቑ።",
        cta_button: "መልእኽቲ ሕደጉ",
        address_label: "ኣድራሻ",
        email_label: "ኢመይል",
        phone_label: "ስልኪ",
        form_name: "ስምኩም",
        form_email: "ኢመይልኩም",
        form_message: "መልእኽቲ",
        success_title: "መልእኽቲ ተላኢኹ!",
        success_message: "መልእኽትኹም ተቐቢልና ኣለና፣ ብቕልጡፍ ክንምልሰልኩም ኢና።",
        sending: "ይለኣኽ ኣሎ...",
        submit: "መልእኽቲ ስደድ"
      }
    }
  },
  so: {
    translation: {
      nav: {
        title: "Bahaar Daar <br /> American Corner",
        home: "Bogga Hore",
        events: "Munaasabadaha",
        book: "Qabso",
        contact: "Nala Soo Xiriir",
        about: "Nagu Saabsan",
        login: "Gal"
      },
      hero: {
        badge: "Ku soo dhawoow American Corner",
        title1: "Soo ogow. Baro. ",
        title_highlight: "Xiriir Samee.",
        subtitle: "Ka qaybgal munaasabadaha, tababarada, iyo barnaamijyada American Corner Bahir Dar. Awoodsiinta bulshada iyadoo la marayo waxbarasho iyo iskaashi.",
        explore: "Sahmi Munaasabadaha",
        book: "Qabso Boos"
      },
      events: {
        title: "Munaasabadaha ",
        title_highlight: "Soo Socda",
        subtitle: "Ha moogaanin barnaamijyadeena iyo tababaradeena ugu dambeeyay.",
        book_now: "Hadda Qabso"
      },
      booking: {
        title: "Booskaaga ",
        title_highlight: "Qabso",
        subtitle: "Boosasku way xaddidan yihiin munaasabadahayaga caanka ah. Hore u sii qabso booskaaga si aad u xaqiijiso gelitaankaaga.",
        benefit1: "Si xor ah ugu helid dhammaan agabyada",
        benefit2: "Fursadaha isku-xirka",
        benefit3: "Tababaro ay khubaro hogaaminayaan",
        name_label: "Magaca Buuxa",
        name_placeholder: "Faarax",
        email_label: "Cinwaanka Iimaylka",
        email_placeholder: "faarax@example.com",
        event_label: "Dooro Munaasabad",
        event_placeholder: "Dooro munaasabad...",
        confirm: "Xaqiiji Qabsashada",
        processing: "Waa la socotaa...",
        success_title: "Boos qabsashada waa la xaqiijiyay!",
        success_message: "Waad ku mahadsan tahay isdiiwaangelintaada! Waxaan cinwaankaaga u soo dirnay iimayl xaqiijin ah oo faahfaahin dheeraad ah ka bixinaya kalfadhiga.",
        book_another: "Boos kale qabso"
      },
      footer: {
        brand: "American Corner",
        brand_highlight: "Bahir Dar",
        tagline: "Awoodsiinta maskaxda, isku xirka bulshooyinka.",
        location: "Bahaar Daar, Itoobiya",
        quick_links: "Xiriiriyeyaasha Degdega ah",
        contact_us: "Nala Soo Xiriir",
        hours_title: "Saacadaha Shaqada",
        mon_fri: "Isniin – Jimco: 09:00 AM – 06:00 PM",
        sat: "Sabti: 09:00 AM – 03:00 PM",
        lunch_break: "(Nasashada qadada: 12:00 PM – 01:00 PM)",
        rights: "American Corner Bahir Dar. Dhammaan xuquuqaha way xifdisan yihiin."
      },
      about: {
        title: "Ku saabsan ",
        title_highlight: "Anaga",
        p1: "Bahir Dar American Corner (BDAC) waa goob Maraykan ah oo ay taageerto Safaaradda Maraykanka ee Itoobiya, kuna taal maktabadda dadweynaha ee Aba Mengesha Geneme.",
        f1: "BDAC waxay bixisaa jawi waxbarasho oo firfircoon oo ku qalabaysan shaybaadhka kombuyuutarka, MakerSpace, iyo agabka shirarka muuqaalka ah.",
        f2: "Waxaan bixinaa tababar dhanka tignoolajiyada ah, horumarinta hogaanka iyo ganacsiga, iyo macluumaad lagu kalsoonaan karo oo ku saabsan dhaqanka iyo waxbarashada Maraykanka si bilaash ah.",
        mission_title: "Hadafkayaga",
        mission_text: "In bulshada la xoojiyo iyadoo kor loo qaadayo xirfadaha dhijitaalka ah, laguna dhiirigelinayo hal-abuurka iyo iskaashiga.",
        stat_free: "Bilaash",
        stat_global: "Xiriirka Caalamiga ah"
      },
      auth: {
        login_title: "Welcome Back",
        register_title: "Join Our Community",
        login_subtitle: "Sign in to access your account",
        register_subtitle: "Create an account to book events and stay updated",
        full_name: "Full Name",
        email: "Email Address",
        password: "Password",
        sign_in: "Sign In",
        create_account: "Create Account",
        no_account: "Don't have an account? ",
        has_account: "Already have an account? ",
        sign_up: "Sign up",
        log_in: "Log in",
        processing: "Processing..."
      },
      app_events: {
        e1_title: "Tababarka Suuqgeynta Dijitaalka",
        e1_desc: "Ka baro xirfadaha suuqgeynta casriga ah, SEO, iyo istiraatiijiyadaha baraha bulshada khubarada warshadaha.",
        e2_title: "Naadiga Sheekada Ingiriiska",
        e2_desc: "Ku horumari kalsoonidaada hadalka deegaan saaxiibtinimo iyo taageero leh.",
        e3_title: "Tababarka Koodhinta",
        e3_desc: "Hordhaca horumarinta shabakadda. Ku dhis shabakaddaada ugu horreysa adigoo isticmaalaya HTML, CSS, iyo React.",
        e4_title: "Siminaarka Ganacsi Abuurka",
        e4_desc: "Ogow sida fikradahaaga loogu beddelo ganacsi guuleysta xilliga dijitaalka ah."
      },
      telegram: {
        title: "Wararkii ",
        title_highlight: "Ugu Dambeeyay",
        subtitle: "La soco ogeysiisyadii ugu dambeeyay ee naga soo gaaraya Telegram.",
        error: "Cillad dhanka shabakadda ah: Laguma guulaysan in la soo raro xogta. Fadlan hubi xiriirkaaga internetka.",
        view_channel: "Ka eeg Telegram",
        translate_all: "U turjun Soomaali",
        loading: "Xogta waa la soo rarayaa...",
        read_more: "Ka akhri Telegram"
      },
      contact: {
        title: "Nagala Soo ",
        title_highlight: "Xiriir",
        subtitle: "Su'aalo ma qabtaa? Waxaan halkan u joognaa inaan kaa caawino inaad la xiriirto adduunka.",
        modal_title: "Farriin ",
        modal_highlight: "Noo Soo Dir",
        modal_subtitle: "Waan ku faraxsanahay inaan kaa maqalno!",
        cta_title: "Ma rabtaa inaad faallo ka tagto?",
        cta_subtitle: "Guji badhanka hoose si aad noogu soo dirto fariin toos ah ama jawaab-celin.",
        cta_button: "Farriin ka tag",
        address_label: "Cinwaanka",
        email_label: "Iimaylka",
        phone_label: "Telefoonka",
        form_name: "Magacaaga",
        form_email: "Iimaylkaaga",
        form_message: "Farriinta",
        success_title: "Farriinta waa la diray!",
        success_message: "Farriintaada waan helnay, dhawaan ayaan kuu soo jawaabi doonaa.",
        sending: "Waa la dirayaa...",
        submit: "Dir Farriinta"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
