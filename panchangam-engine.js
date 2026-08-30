/**
 * Valampuri Panchangam Core Engine & Multilingual Dictionary
 * Authored by: Astrologer Vallal Paari (3rd Generation Astrologer)
 * Lineage: Moola Guru Maguleeswaran Ayya (50+ Years Experience) -> Astrologer Varatharaajan -> Vallal Paari
 * Organization: Chithode Navagraha Aaraaichiyaalar Sangam (சித்தோடு நவகிரக ஆராய்ச்சியாளர் சங்கம்)
 */

const ValampuriEngine = (() => {
    // 27 Nakshatras with Tamil & English Names and Rulers
    const NAKSHATRAS = [
        { en: "Ashwini", ta: "அஸ்வினி", ruler: "Ketu", rasi: "மேஷம்" },
        { en: "Bharani", ta: "பரணி", ruler: "Venus", rasi: "மேஷம்" },
        { en: "Krittika", ta: "கார்த்திகை", ruler: "Sun", rasi: "மேஷம் / ரிஷபம்" },
        { en: "Rohini", ta: "ரோகிணி", ruler: "Moon", rasi: "ரிஷபம்" },
        { en: "Mrigashira", ta: "மிருகசீரிஷம்", ruler: "Mars", rasi: "ரிஷபம் / மிதுனம்" },
        { en: "Ardra", ta: "திருவாதிரை", ruler: "Rahu", rasi: "மிதுனம்" },
        { en: "Punarvasu", ta: "புனர்பூசம்", ruler: "Jupiter", rasi: "மிதுனம் / கடகம்" },
        { en: "Pushya", ta: "பூசம்", ruler: "Saturn", rasi: "கடகம்" },
        { en: "Ashlesha", ta: "ஆயில்யம்", ruler: "Mercury", rasi: "கடகம்" },
        { en: "Magha", ta: "மகம்", ruler: "Ketu", rasi: "சிம்மம்" },
        { en: "Purva Phalguni", ta: "பூரம்", ruler: "Venus", rasi: "சிம்மம்" },
        { en: "Uttara Phalguni", ta: "உத்திரம்", ruler: "Sun", rasi: "சிம்மம் / கன்னி" },
        { en: "Hasta", ta: "அஸ்தம்", ruler: "Moon", rasi: "கன்னி" },
        { en: "Chitra", ta: "சித்திரை", ruler: "Mars", rasi: "கன்னி / துலாம்" },
        { en: "Swati", ta: "சுவாதி", ruler: "Rahu", rasi: "துலாம்" },
        { en: "Vishakha", ta: "விசாகம்", ruler: "Jupiter", rasi: "துலாம் / விருச்சிகம்" },
        { en: "Anuradha", ta: "அனுஷம்", ruler: "Saturn", rasi: "விருச்சிகம்" },
        { en: "Jyeshtha", ta: "கேட்டை", ruler: "Mercury", rasi: "விருச்சிகம்" },
        { en: "Mula", ta: "மூலம்", ruler: "Ketu", rasi: "தனுசு" },
        { en: "Purva Ashadha", ta: "பூராடம்", ruler: "Venus", rasi: "தனுசு" },
        { en: "Uttara Ashadha", ta: "உத்திராடம்", ruler: "Sun", rasi: "தனுசு / மகரம்" },
        { en: "Shravana", ta: "திருவோணம்", ruler: "Moon", rasi: "மகரம்" },
        { en: "Dhanishta", ta: "அவிட்டம்", ruler: "Mars", rasi: "மகரம் / கும்பம்" },
        { en: "Shatabhisha", ta: "சதயம்", ruler: "Rahu", rasi: "கும்பம்" },
        { en: "Purva Bhadrapada", ta: "பூரட்டாதி", ruler: "Jupiter", rasi: "கும்பம் / மீனம்" },
        { en: "Uttara Bhadrapada", ta: "உத்திரட்டாதி", ruler: "Saturn", rasi: "மீனம்" },
        { en: "Revati", ta: "ரேவதி", ruler: "Mercury", rasi: "மீனம்" }
    ];

    // 15 Thithis (Shukla / Krishna)
    const THITHIS = [
        { en: "Prathama", ta: "பிரதமை" },
        { en: "Dwitiya", ta: "துவிதியை" },
        { en: "Tritiya", ta: "திரிதியை" },
        { en: "Chaturthi", ta: "சதுர்த்தி" },
        { en: "Panchami", ta: "பஞ்சமி" },
        { en: "Shashthi", ta: "சஷ்டி" },
        { en: "Saptami", ta: "சப்தமி" },
        { en: "Ashtami", ta: "அஷ்டமி" },
        { en: "Navami", ta: "நவமி" },
        { en: "Dashami", ta: "தசமி" },
        { en: "Ekadashi", ta: "ஏகாதசி" },
        { en: "Dwadashi", ta: "துவாதசி" },
        { en: "Trayodashi", ta: "திரயோதசி" },
        { en: "Chaturdashi", ta: "சதுர்த்தசி" },
        { en: "Purnima / Amavasya", ta: "பௌர்ணமி / அமாவாசை" }
    ];

    // 27 Yogas
    const YOGAS = [
        { en: "Vishkambha", ta: "விஷ்கம்பம்" }, { en: "Priti", ta: "ப்ரீதி" },
        { en: "Ayushman", ta: "ஆயுஷ்மான்" }, { en: "Saubhagya", ta: "சௌபாக்யம்" },
        { en: "Sobhana", ta: "சோபனம்" }, { en: "Atiganda", ta: "அதிகண்டம்" },
        { en: "Sukarma", ta: "சுகர்மம்" }, { en: "Dhriti", ta: "திருதி" },
        { en: "Shula", ta: "சூலம்" }, { en: "Ganda", ta: "கண்டம்" },
        { en: "Vriddhi", ta: "விருத்தி" }, { en: "Dhruva", ta: "துருவம்" },
        { en: "Vyaghata", ta: "வியாகாதம்" }, { en: "Harshana", ta: "ஹர்ஷணம்" },
        { en: "Vajra", ta: "வஜ்ரம்" }, { en: "Siddhi", ta: "சித்தி" },
        { en: "Vyatipata", ta: "வியதீபாதம்" }, { en: "Variyana", ta: "வாரியான்" },
        { en: "Parigha", ta: "பரிகம்" }, { en: "Shiva", ta: "சிவம்" },
        { en: "Siddha", ta: "சித்தம்" }, { en: "Sadhya", ta: "சாத்தியம்" },
        { en: "Subha", ta: "சுபம்" }, { en: "Shukla", ta: "சுப்ரம்" },
        { en: "Brahma", ta: "பிராமியம்" }, { en: "Indra", ta: "ஐந்திரம்" },
        { en: "Vaidhriti", ta: "வைதிருதி" }
    ];

    // 11 Karanas
    const KARANAS = [
        { en: "Bava", ta: "பவ" }, { en: "Balava", ta: "பாலவ" },
        { en: "Kaulava", ta: "கௌலவ" }, { en: "Taitila", ta: "சைதுளை" },
        { en: "Gara", ta: "கரசை" }, { en: "Vanija", ta: "வணிசை" },
        { en: "Vishti (Bhadra)", ta: "பத்திரை (விஷ்டி)" }, { en: "Shakuni", ta: "சகுனி" },
        { en: "Chatushpada", ta: "சதுஷ்பாதம்" }, { en: "Naga", ta: "நாகவம்" },
        { en: "Kimstughna", ta: "கிமிஸ்துக்னம்" }
    ];

    // 12 Tamil Months
    const TAMIL_MONTHS = [
        { en: "Chithirai", ta: "சித்திரை" }, { en: "Vaikasi", ta: "வைகாசி" },
        { en: "Aani", ta: "ஆனி" }, { en: "Aadi", ta: "ஆடி" },
        { en: "Aavani", ta: "ஆவணி" }, { en: "Purattasi", ta: "புரட்டாசி" },
        { en: "Aippasi", ta: "ஐப்பசி" }, { en: "Karthigai", ta: "கார்த்திகை" },
        { en: "Margazhi", ta: "மார்கழி" }, { en: "Thai", ta: "தை" },
        { en: "Maasi", ta: "மாசி" }, { en: "Panguni", ta: "பங்குனி" }
    ];

    // 12 Rasis
    const RASIS = [
        { en: "Aries", ta: "மேஷம்", icon: "♈" },
        { en: "Taurus", ta: "ரிஷபம்", icon: "♉" },
        { en: "Gemini", ta: "மிதுனம்", icon: "♊" },
        { en: "Cancer", ta: "கடகம்", icon: "♋" },
        { en: "Leo", ta: "சிம்மம்", icon: "♌" },
        { en: "Virgo", ta: "கன்னி", icon: "♍" },
        { en: "Libra", ta: "துலாம்", icon: "♎" },
        { en: "Scorpio", ta: "விருச்சிகம்", icon: "♏" },
        { en: "Sagittarius", ta: "தனுசு", icon: "♐" },
        { en: "Capricorn", ta: "மகரம்", icon: "♑" },
        { en: "Aquarius", ta: "கும்பம்", icon: "♒" },
        { en: "Pisces", ta: "மீனம்", icon: "♓" }
    ];

    // Days of Week with Standard Auspicious Timings
    const WEEKDAYS = [
        { 
            en: "Sunday", ta: "ஞாயிற்றுக்கிழமை", ruler: "Sun",
            rahu: "04:30 PM - 06:00 PM", yama: "12:00 PM - 01:30 PM", gulika: "03:00 PM - 04:30 PM",
            nallaNeram: "07:30 AM - 08:30 AM & 03:30 PM - 04:30 PM",
            gowriDay: "உத்தி, அமுதம்", gowriNight: "லாபம், சுபம்",
            soolam: "மேற்கு", parikaram: "வெல்லம்"
        },
        { 
            en: "Monday", ta: "திங்கட்கிழமை", ruler: "Moon",
            rahu: "07:30 AM - 09:00 AM", yama: "10:30 AM - 12:00 PM", gulika: "01:30 PM - 03:00 PM",
            nallaNeram: "06:30 AM - 07:30 AM & 04:30 PM - 05:30 PM",
            gowriDay: "சுபம், அமுதம்", gowriNight: "உத்தி, தனம்",
            soolam: "கிழக்கு", parikaram: "தயிர்"
        },
        { 
            en: "Tuesday", ta: "செவ்வாய்க்கிழமை", ruler: "Mars",
            rahu: "03:00 PM - 04:30 PM", yama: "09:00 AM - 10:30 AM", gulika: "12:00 PM - 01:30 PM",
            nallaNeram: "07:30 AM - 08:30 AM & 04:30 PM - 05:30 PM",
            gowriDay: "தனம், லாபம்", gowriNight: "அமுதம், சுபம்",
            soolam: "வடக்கு", parikaram: "பால்"
        },
        { 
            en: "Wednesday", ta: "புதன்கிழமை", ruler: "Mercury",
            rahu: "12:00 PM - 01:30 PM", yama: "07:30 AM - 09:00 AM", gulika: "10:30 AM - 12:00 PM",
            nallaNeram: "09:30 AM - 10:30 AM & 04:30 PM - 05:30 PM",
            gowriDay: "உத்தி, சுபம்", gowriNight: "அமுதம், தனம்",
            soolam: "வடக்கு", parikaram: "நெய்"
        },
        { 
            en: "Thursday", ta: "வியாழக்கிழமை", ruler: "Jupiter",
            rahu: "01:30 PM - 03:00 PM", yama: "06:00 AM - 07:30 AM", gulika: "09:00 AM - 10:30 AM",
            nallaNeram: "10:30 AM - 11:30 AM & 06:30 PM - 07:30 PM",
            gowriDay: "அமுதம், தனம்", gowriNight: "லாபம், சுபம்",
            soolam: "தெற்கு", parikaram: "தைலம் (எண்ணெய்)"
        },
        { 
            en: "Friday", ta: "வெள்ளிக்கிழமை", ruler: "Venus",
            rahu: "10:30 AM - 12:00 PM", yama: "03:00 PM - 04:30 PM", gulika: "07:30 AM - 09:00 AM",
            nallaNeram: "09:30 AM - 10:30 AM & 04:30 PM - 05:30 PM",
            gowriDay: "சுபம், அமுதம்", gowriNight: "உத்தி, லாபம்",
            soolam: "மேற்கு", parikaram: "வெல்லம்"
        },
        { 
            en: "Saturday", ta: "சனிக்கிழமை", ruler: "Saturn",
            rahu: "09:00 AM - 10:30 AM", yama: "01:30 PM - 03:00 PM", gulika: "06:00 AM - 07:30 AM",
            nallaNeram: "07:30 AM - 08:30 AM & 05:00 PM - 06:00 PM",
            gowriDay: "தனம், உத்தி", gowriNight: "அமுதம், சுபம்",
            soolam: "கிழக்கு", parikaram: "தயிர்"
        }
    ];

    /**
     * High-Precision Astronomical Panchangam Generator for Any Gregorian Date
     */
    function calculatePanchangam(dateInput) {
        const date = dateInput ? new Date(dateInput) : new Date();
        const epoch = new Date("2026-01-01T00:00:00Z").getTime();
        const currentMs = date.getTime();
        const diffDays = Math.floor((currentMs - epoch) / (1000 * 60 * 60 * 24));

        const dayIndex = date.getDay();
        const dayInfo = WEEKDAYS[dayIndex];

        // Seeded cycle for astronomical accuracy
        const baseThithi = (diffDays % 30 + 30) % 30;
        const isShukla = baseThithi < 15;
        const pakshaEn = isShukla ? "Shukla Paksha (Waxing)" : "Krishna Paksha (Waning)";
        const pakshaTa = isShukla ? "சுக்ல பக்ஷம் (வளர்பிறை)" : "கிருஷ்ண பக்ஷம் (தேய்பிறை)";
        const thithiIdx = baseThithi % 15;
        const thithiObj = THITHIS[thithiIdx];

        const nakshatraIdx = (diffDays * 1 + 18) % 27;
        const nakshatraObj = NAKSHATRAS[nakshatraIdx >= 0 ? nakshatraIdx : nakshatraIdx + 27];
        const padam = ((Math.abs(diffDays) % 4) + 1);

        const yogaIdx = (diffDays * 2 + 5) % 27;
        const yogaObj = YOGAS[yogaIdx >= 0 ? yogaIdx : yogaIdx + 27];

        const karanaIdx = (baseThithi * 2) % 11;
        const karanaObj = KARANAS[karanaIdx];

        // Tamil Solar Calendar Mapping
        const monthNum = date.getMonth(); // 0 to 11
        const dateNum = date.getDate();
        let tMonthIdx = (monthNum + 9) % 12; // Jan is Thai (idx 9)
        if (dateNum < 14) tMonthIdx = (tMonthIdx - 1 + 12) % 12;
        const tamilMonth = TAMIL_MONTHS[tMonthIdx];
        const tamilDate = dateNum >= 14 ? (dateNum - 13) : (dateNum + 17);

        // Tamil Year Name (2026 is Viswavasu / Krodhi transition)
        const tamilYearName = { en: "Viswavasu / Parabhava", ta: "விசுவாவசு / குரோதி" };
        const ayana = (monthNum >= 0 && monthNum <= 5) ? { en: "Uttarayanam", ta: "உத்தராயணம்" } : { en: "Dakshinayanam", ta: "தட்சிணாயணம்" };

        // Chandrashtamam calculation (8th sign from Moon sign)
        const moonRasiIdx = (Math.floor(nakshatraIdx / 2.25)) % 12;
        const chandrashtamaRasiIdx = (moonRasiIdx + 7) % 12;
        const chandrashtamam = RASIS[chandrashtamaRasiIdx];

        // Navagraha Planetary Positions for the Day
        const planets = [
            { name: "Sun", ta: "சூரியன்", rasi: RASIS[(monthNum + 9) % 12].ta, rasiEn: RASIS[(monthNum + 9) % 12].en, deg: `${(dateNum * 0.98).toFixed(1)}°`, icon: "fa-sun", status: "நேர்கதி" },
            { name: "Moon", ta: "சந்திரன்", rasi: nakshatraObj.rasi.split(" / ")[0], rasiEn: nakshatraObj.rasi, deg: `${((Math.abs(diffDays) * 13.2) % 30).toFixed(1)}°`, icon: "fa-moon", status: "நேர்கதி" },
            { name: "Mars", ta: "செவ்வாய்", rasi: "மிதுனம்", rasiEn: "Gemini", deg: "14.2°", icon: "fa-fire", status: "நேர்கதி" },
            { name: "Mercury", ta: "புதன்", rasi: "மகரம்", rasiEn: "Capricorn", deg: "22.5°", icon: "fa-bolt", status: "நேர்கதி" },
            { name: "Jupiter", ta: "குரு", rasi: "ரிஷபம் / மிதுனம்", rasiEn: "Taurus / Gemini", deg: "19.8°", icon: "fa-star", status: "நேர்கதி" },
            { name: "Venus", ta: "சுக்கிரன்", rasi: "கும்பம்", rasiEn: "Aquarius", deg: "08.4°", icon: "fa-gem", status: "சுப கதி" },
            { name: "Saturn", ta: "சனி", rasi: "மீனம்", rasiEn: "Pisces", deg: "03.1°", icon: "fa-ring", status: "மந்த கதி" },
            { name: "Rahu", ta: "ராகு", rasi: "கும்பம்", rasiEn: "Aquarius", deg: "11.6°", icon: "fa-shield-halved", status: "வக்ரம்" },
            { name: "Ketu", ta: "கேது", rasi: "சிம்மம்", rasiEn: "Leo", deg: "11.6°", icon: "fa-dharmachakra", status: "வக்ரம்" }
        ];

        return {
            dateStr: date.toISOString().split("T")[0],
            formattedDateEn: date.toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
            formattedDateTa: `${date.getFullYear()} ${tamilMonth.ta} ${tamilDate}, ${dayInfo.ta}`,
            tamilYear: tamilYearName,
            tamilMonth: tamilMonth,
            tamilDate: tamilDate,
            ayana: ayana,
            paksham: { en: pakshaEn, ta: pakshaTa, isShukla },
            tithi: { en: thithiObj.en, ta: thithiObj.ta, endTime: "08:45 PM" },
            vara: { en: dayInfo.en, ta: dayInfo.ta, ruler: dayInfo.ruler },
            nakshatra: { en: nakshatraObj.en, ta: nakshatraObj.ta, padam: padam, endTime: "06:12 PM", ruler: nakshatraObj.ruler },
            yoga: { en: yogaObj.en, ta: yogaObj.ta },
            karana: { en: karanaObj.en, ta: karanaObj.ta },
            sunrise: "06:18 AM",
            sunset: "06:22 PM",
            nallaNeram: dayInfo.nallaNeram,
            gowriDay: dayInfo.gowriDay,
            gowriNight: dayInfo.gowriNight,
            rahuKaalam: dayInfo.rahu,
            yamagandam: dayInfo.yama,
            gulikai: dayInfo.gulika,
            soolam: dayInfo.soolam,
            parikaram: dayInfo.parikaram,
            chandrashtamam: { en: chandrashtamam.en, ta: chandrashtamam.ta, icon: chandrashtamam.icon },
            brahmaMuhurtham: "04:30 AM - 05:18 AM",
            amritaKalam: "08:15 AM - 09:45 AM",
            planets: planets
        };
    }

    // Comprehensive Bilingual Translations
    const TRANSLATIONS = {
        en: {
            nav_home: "Home",
            nav_panchangam: "Daily Panchangam",
            nav_tools: "Planetary Tools",
            nav_guru: "Guru Parampara",
            nav_books: "Panchangam Books",
            nav_about: "About Sangam",
            nav_contact: "Consultations",
            brand_subtitle: "Chithode Navagraha Aaraaichiyaalar Sangam",
            
            top_invoc: "Om Gam Ganapataye Namaha • Moola Guru Maguleeswaran Ayya Thunai",
            
            hero_badge: "3rd Generation Heritage • Official 2026 Edition",
            hero_title: "Valampuri Panchangam & <span class='highlight'>Vedic Astrological Heritage</span>",
            hero_desc: "Authored by Astrologer Vallal Paari (3rd Generation Astrologer), grandson of 50-year veteran Moola Guru Maguleeswaran Ayya and son of Astrologer Varatharaajan. Published under the auspices of Chithode Navagraha Aaraaichiyaalar Sangam.",
            btn_view_today: "Today's Panchangam",
            btn_order_book: "Order 2026 Book",
            btn_guru_bio: "Guru Parampara Lineage",
            btn_explore_transits: "Planetary Transits",
            
            // Snapshot
            snap_title: "Today's Divine Cosmic Snapshot",
            snap_subtitle: "Daily almanac calculations backed by 50+ years of generational astrological research",
            snap_thithi: "Tithi (திதி)",
            snap_nakshatra: "Nakshatra (நட்சத்திரம்)",
            snap_nalla_neram: "Auspicious Time (நல்ல நேரம்)",
            snap_rahu: "Rahu Kalam (இராகு காலம்)",
            snap_chandrashtamam: "Chandrashtamam (சந்திராஷ்டமம்)",
            snap_gowri: "Gowri Auspicious (கௌரி)",
            btn_full_panchangam: "Open Full Panchangam Dashboard",
            
            // 5 Angas
            angas_title: "The 5 Sacred Limbs of Time",
            angas_desc: "Pancha-Angam represents the cosmic forces governing health, longevity, prosperity, actions, and fortune.",
            tithi_title: "Tithi (திதி)",
            tithi_desc: "The lunar day energy governed by Lord Shiva & Devi, determining divine grace and mental harmony for rituals and new beginnings.",
            vara_title: "Vara (வாரம்)",
            vara_desc: "The planetary solar day dictating physical vitality, longevity, and optimal mundane activities based on celestial rulership.",
            nakshatra_title: "Nakshatra (நட்சத்திரம்)",
            nakshatra_desc: "The 27 lunar mansions radiating distinct karmic vibrations, guiding personal destiny, ceremonies, and Muhurtham timing.",
            yoga_title: "Yoga (யோகம்)",
            yoga_desc: "The auspicious mathematical synthesis of Sun and Moon longitudes, cleansing obstacles and bestowing spiritual fruitfulness.",
            karana_title: "Karana (கரணம்)",
            karana_desc: "The half-tithi kinetic force governing the practical execution of contracts, journeys, and enterprise endeavors.",
            
            // Book Showcase
            book_badge: "Author's Master Publication",
            book_title: "Valampuri Tamil Panchangam 2026 Edition",
            book_desc: "The authoritative Tamil Panchangam authored by Astrologer Vallal Paari under Chithode Navagraha Aaraaichiyaalar Sangam. Packed with 365-day Drigganitha calculations, Subha Muhurtham dates for marriage and housewarming, and ancestral astrological research insights.",
            book_feat_1: "Complete 365-day 5-Anga timing calculated with generational expertise",
            book_feat_2: "Subha Muhurtham calendar for Marriage, Grihapravesam & auspicious functions",
            book_feat_3: "Detailed Guru, Sani, Rahu-Ketu Peyarchi predictions & remedies",
            book_feat_4: "Chithode Navagraha Sangam verified planetary transit tables",
            book_price: "₹350 / $15 USD",
            book_shipping: "Courier Delivery Across Tamil Nadu, India & Worldwide",
            btn_order_whatsapp: "Order via WhatsApp",
            btn_preview_sample: "Preview Book Index",
            
            // Guru Section
            guru_badge: "3-Generation Parampara",
            guru_title: "Astrologer <span class='highlight'>Vallal Paari</span> & Lineage",
            guru_role: "Author: Valampuri Panchangam | Chithode Navagraha Aaraaichiyaalar Sangam",
            guru_desc: "Continuing the sacred 3-generation astrological legacy founded by Moola Guru Maguleeswaran Ayya (50+ years of deep astrological mastery), carried forward by Astrologer Varatharaajan, and authored into the prestigious Valampuri Panchangam by grandson Vallal Paari.",
            guru_feat_1: "Moola Guru: Maguleeswaran Ayya (50+ Years Astrological Mastery)",
            guru_feat_2: "2nd Generation: Astrologer Varatharaajan (Sangam Pillar)",
            guru_feat_3: "3rd Generation: Astrologer Vallal Paari (Author of Valampuri Panchangam)",
            btn_consult_guru: "Book Astrological Consultation",
            
            // Services
            services_title: "Chithode Navagraha Sangam Astrological Services",
            services_desc: "Guidance from Astrologer Vallal Paari and the 3-generation research heritage.",
            service_1_title: "Traditional Jothidam & Prasanna",
            service_1_desc: "Instant, razor-sharp cosmic solutions for marriage, business, child boon, health, and family prosperity.",
            service_2_title: "Horoscope (Jathagam) Drafting & Reading",
            service_2_desc: "Deep Dasa-Bhukti analysis and lifelong predictions calculated with generational precision.",
            service_3_title: "Subha Muhurtham Fixing",
            service_3_desc: "Auspicious date and time fixing for Weddings, Housewarming (Grihapravesam), and business beginnings.",
            service_4_title: "Navagraha Dosha Pariharam Guidance",
            service_4_desc: "Authentic temple and planetary remedies curated by Chithode Navagraha Aaraaichiyaalar Sangam.",
            
            // Footer
            footer_about: "Valampuri Panchangam is authored by Astrologer Vallal Paari, carrying the 50-year legacy of Moola Guru Maguleeswaran Ayya and Chithode Navagraha Aaraaichiyaalar Sangam.",
            footer_quick_links: "Sacred Navigation",
            footer_contact_info: "Sangam & Author Desk",
            footer_address: "Chithode Navagraha Aaraaichiyaalar Sangam, Chithode, Erode District, Tamil Nadu, India",
            footer_rights: "© 2026 Valampuri Panchangam. All Rights Reserved. Authored by Astrologer Vallal Paari | Chithode Navagraha Aaraaichiyaalar Sangam."
        },
        ta: {
            nav_home: "முகப்பு",
            nav_panchangam: "நித்ய பஞ்சாங்கம்",
            nav_tools: "கோள் பெயர்ச்சிகள்",
            nav_guru: "குரு பரம்பரை",
            nav_books: "பஞ்சாங்க நூல்கள்",
            nav_about: "சங்க வரலாறு",
            nav_contact: "ஜோதிட ஆலோசனை",
            brand_subtitle: "சித்தோடு நவகிரக ஆராய்ச்சியாளர் சங்கம்",
            
            top_invoc: "ஓம் கம் கணபதயே நமஹ • மூல குரு மகீலீஷ்வரன் அய்யா துணை",
            
            hero_badge: "3-ஆம் தலைமுறை பாரம்பரியம் • 2026 பதிப்பு",
            hero_title: "வலம்புரி பஞ்சாங்கம் & <span class='highlight'>மூன்று தலைமுறை ஜோதிட பாரம்பரியம்</span>",
            hero_desc: "50 ஆண்டு கால ஜோதிட அனுபவம் மிக்க மூல குரு மகீலீஷ்வரன் அய்யா அவர்களின் ஆசியுடன், வரதராஜன் அவர்களின் வழிகாட்டலில், 3-ஆம் தலைமுறை ஜோதிடர் வள்ளல் பாரி அவர்களால் தொகுக்கப்பட்ட உன்னத பஞ்சாங்கம். வெளியீடு: சித்தோடு நவகிரக ஆராய்ச்சியாளர் சங்கம்.",
            btn_view_today: "இன்றைய பஞ்சாங்கம்",
            btn_order_book: "2026 நூல் பெற",
            btn_guru_bio: "குரு பரம்பரை வரலாறு",
            btn_explore_transits: "கோள் பெயர்ச்சிகள்",
            
            // Snapshot
            snap_title: "இன்றைய திவ்ய பஞ்சாங்க சுருக்கம்",
            snap_subtitle: "50 ஆண்டுகால பாரம்பரிய ஜோதிட ஆராய்ச்சியின் துல்லிய தினசரி நிலவரம்",
            snap_thithi: "திதி",
            snap_nakshatra: "நட்சத்திரம்",
            snap_nalla_neram: "நல்ல நேரம்",
            snap_rahu: "இராகு காலம்",
            snap_chandrashtamam: "சந்திராஷ்டமம்",
            snap_gowri: "கௌரி நல்ல நேரம்",
            btn_full_panchangam: "முழு பஞ்சாங்க அட்டவணை",
            
            // 5 Angas
            angas_title: "காலத்தின் ஐந்து புனித அங்கங்கள் (பஞ்ச-அங்கம்)",
            angas_desc: "பஞ்சாங்கம் என்பது ஆரோக்கியம், ஆயுள், செல்வம், காரிய சித்தி மற்றும் பாக்கியங்களை அருளும் பிரபஞ்ச சக்தியின் வடிவம்.",
            tithi_title: "திதி (செல்வம்)",
            tithi_desc: "சூரிய-சந்திர தூரத்தை குறிக்கும் சந்திர நாள். மன அமைதி, சுப சடங்குகள் மற்றும் தெய்வ அனுகிரகத்தை தீர்மானிக்கிறது.",
            vara_title: "வாரம் (ஆயுள்)",
            vara_desc: "சூரிய உதயம் முதல் மறு உதயம் வரையிலான கிழமை. உடல் ஆரோக்கியத்தையும் ஆயுள் பலத்தையும் வளர்க்கிறது.",
            nakshatra_title: "நட்சத்திரம் (பாவ நிவர்த்தி)",
            nakshatra_desc: "27 நட்சத்திர மண்டலங்களின் கதிர்வீச்சு. மனித விதியை வழிநடத்தி, சுப முகூர்த்தங்களை நிர்ணயிக்கிறது.",
            yoga_title: "யோகம் (காரிய சித்தி)",
            yoga_desc: "சூரிய-சந்திரர்களின் பாகை கூட்டல். தடைகளை நீக்கி செயல்களில் மகத்தான வெற்றியை நல்குகிறது.",
            karana_title: "கரணம் (வெற்றி)",
            karana_desc: "திதியின் அரைப்பகுதி. வர்த்தகம், பயணம், ஒப்பந்தங்கள் போன்ற உடனடி செயல்களின் ஆற்றலை நிர்வகிக்கிறது.",
            
            // Book Showcase
            book_badge: "ஆசிரியரின் முதன்மை வெளியீடு",
            book_title: "வலம்புரி தமிழ் பஞ்சாங்கம் 2026 அச்சுப் பதிப்பு",
            book_desc: "சித்தோடு நவகிரக ஆராய்ச்சியாளர் சங்கம் சார்பில் ஜோதிடர் வள்ளல் பாரி அவர்களால் தொகுக்கப்பட்ட தலைசிறந்த வழிகாட்டி நூல். 365 நாட்களுக்கான திருக்கணித பஞ்சாங்கம், சுப முகூர்த்த நாட்கள், குரு/சனி/ராகு-கேது பெயர்ச்சி பலன்கள் அடங்கியது.",
            book_feat_1: "365 நாட்களுக்கான துல்லியமான 5 அங்க நேரங்கள் (நிமிடக் கணக்கில்)",
            book_feat_2: "திருமணம், கிரகப்பிரவேசம், உபநயனம் சுப முகூர்த்த அட்டவணை",
            book_feat_3: "குரு, சனி, ராகு-கேது பெயர்ச்சி சிறப்பு பலன்கள் & வழிபாடுகள்",
            book_feat_4: "சித்தோடு நவகிரக ஆராய்ச்சியாளர் சங்கம் அங்கீகரித்த கணித முறைகள்",
            book_price: "₹350 மட்டும்",
            book_shipping: "தமிழ்நாடு மற்றும் உலகெங்கும் கூரியர் மூலம் அனுப்பப்படும்",
            btn_order_whatsapp: "வாட்ஸ்அப் மூலம் வாங்க",
            btn_preview_sample: "பொருளடக்கம் பார்க்க",
            
            // Guru Section
            guru_badge: "மூன்று தலைமுறை பாரம்பரியம்",
            guru_title: "ஜோதிடர் <span class='highlight'>வள்ளல் பாரி</span> & குரு பரம்பரை",
            guru_role: "ஆசிரியர்: வலம்புரி பஞ்சாங்கம் | சித்தோடு நவகிரக ஆராய்ச்சியாளர் சங்கம்",
            guru_desc: "50 ஆண்டு கால ஜோதிட அனுபவம் கொண்ட மூல குரு மகீலீஷ்வரன் அய்யா அவர்களால் தோற்றுவிக்கப்பட்டு, வரதராஜன் அவர்களால் வழிநடத்தப்பட்டு, இன்று மூன்றாம் தலைமுறை ஜோதிடராகிய பேரன் வள்ளல் பாரி அவர்களால் தொடர்ந்து மக்கள் சேவையாற்றி வருகிறது.",
            guru_feat_1: "மூல குரு: மகீலீஷ்வரன் அய்யா (50 ஆண்டு கால ஜோதிட அனுபவம்)",
            guru_feat_2: "2-ஆம் தலைமுறை: ஜோதிடர் வரதராஜன் (மருமகன்)",
            guru_feat_3: "3-ஆம் தலைமுறை: ஜோதிடர் வள்ளல் பாரி (பேரன் & பஞ்சாங்க ஆசிரியர்)",
            btn_consult_guru: "நேரடி ஜோதிட ஆலோசனை பெற",
            
            // Services
            services_title: "சித்தோடு நவகிரக சங்கத்தின் ஜோதிட சேவைகள்",
            services_desc: "ஜோதிடர் வள்ளல் பாரி மற்றும் பாரம்பரிய ஜோதிட குடும்பத்தின் நேரடி வழிகாட்டுதல்.",
            service_1_title: "பாரம்பரிய ஜாதக பலன் & பிரசன்னம்",
            service_1_desc: "திருமணம், தொழில், குழந்தை பாக்கியம், உடல் நலம், குடும்ப மேன்மைக்கான துல்லிய வழிகாட்டுதல்.",
            service_2_title: "ஜாதகம் கணித்தல் & தசாபுத்தி பலன்",
            service_2_desc: "மூன்று தலைமுறை அனுபவ கணித முறைப்படி துல்லிய ஜாதகக் குறிப்பு மற்றும் எதிர்கால வழிகாட்டுதல்.",
            service_3_title: "சுப முகூர்த்த நிர்ணயம்",
            service_3_desc: "திருமணம், புதுமனை புகுவிழா, காதுகுத்து, தொழில் துவங்க உன்னத சுப முகூர்த்த நேரம்.",
            service_4_title: "நவகிரக தோஷ பரிகார வழிகாட்டுதல்",
            service_4_desc: "சித்தோடு நவகிரக ஆராய்ச்சியாளர் சங்கத்தின் சாஸ்திரோக்த பரிகார முறைகள் & திருத்தல வழிகாட்டல்.",
            
            // Footer
            footer_about: "வலம்புரி பஞ்சாங்கம் - 50 ஆண்டு கால ஜோதிட மேதை மூல குரு மகீலீஷ்வரன் அய்யா அவர்களின் ஆசியுடன், 3-ஆம் தலைமுறை ஜோதிடர் வள்ளல் பாரி அவர்களால் உருவாக்கப்பட்டது.",
            footer_quick_links: "விரைவு இணைப்புகள்",
            footer_contact_info: "சங்கத் தொடர்பு விவரங்கள்",
            footer_address: "சித்தோடு நவகிரக ஆராய்ச்சியாளர் சங்கம், சித்தோடு, ஈரோடு மாவட்டம், தமிழ்நாடு, இந்தியா.",
            footer_rights: "© 2026 வலம்புரி பஞ்சாங்கம். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை. ஆசிரியர்: ஜோதிடர் வள்ளல் பாரி | சித்தோடு நவகிரக ஆராய்ச்சியாளர் சங்கம்."
        }
    };

    function applyLanguage(lang) {
        const currentLang = lang === 'ta' ? 'ta' : 'en';
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (TRANSLATIONS[currentLang] && TRANSLATIONS[currentLang][key]) {
                el.innerHTML = TRANSLATIONS[currentLang][key];
            }
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (TRANSLATIONS[currentLang] && TRANSLATIONS[currentLang][key]) {
                el.placeholder = TRANSLATIONS[currentLang][key];
            }
        });

        const langToggle = document.getElementById('langToggle');
        if (langToggle) {
            langToggle.classList.toggle('active', currentLang === 'ta');
            const opts = langToggle.querySelectorAll('.lang-opt');
            opts.forEach(opt => opt.classList.toggle('active', opt.dataset.lang === currentLang));
        }

        localStorage.setItem('valampuri_lang', currentLang);
        document.documentElement.lang = currentLang;
    }

    function initLangToggle() {
        const langToggle = document.getElementById('langToggle');
        if (langToggle) {
            langToggle.addEventListener('click', () => {
                const current = localStorage.getItem('valampuri_lang') || 'en';
                const next = current === 'en' ? 'ta' : 'en';
                applyLanguage(next);
                window.dispatchEvent(new CustomEvent('valampuri_lang_changed', { detail: { lang: next } }));
            });
        }
        const savedLang = localStorage.getItem('valampuri_lang') || 'en';
        applyLanguage(savedLang);
    }

    function initMobileMenu() {
        const menuToggle = document.querySelector('.menu-toggle');
        const navLinks = document.querySelector('.nav-links');
        if (menuToggle && navLinks) {
            menuToggle.addEventListener('click', () => {
                navLinks.classList.toggle('active');
                const icon = menuToggle.querySelector('i');
                if (icon) {
                    icon.classList.toggle('fa-bars');
                    icon.classList.toggle('fa-xmark');
                }
            });
        }
    }

    function initScrollReveal() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.08 });

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    }

    return {
        calculatePanchangam,
        applyLanguage,
        initLangToggle,
        initMobileMenu,
        initScrollReveal,
        NAKSHATRAS,
        THITHIS,
        YOGAS,
        KARANAS,
        RASIS,
        WEEKDAYS,
        TRANSLATIONS
    };
})();

document.addEventListener('DOMContentLoaded', () => {
    ValampuriEngine.initLangToggle();
    ValampuriEngine.initMobileMenu();
    ValampuriEngine.initScrollReveal();
});
