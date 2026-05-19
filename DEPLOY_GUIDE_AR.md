# دليل رفع البورتفوليو

## التشغيل محلياً

1. فك الضغط عن الملف.
2. افتح المجلد `ahmed_gubran_cyber_portfolio_pro`.
3. افتح ملف `index.html` في المتصفح.

## تعديل البيانات

كل البيانات موجودة هنا:

```text
data/portfolio-data.js
```

تقدر تعدل:

- الاسم
- المسمى الوظيفي
- النبذة
- الإيميل
- LinkedIn
- GitHub
- الشهادات
- الجوائز
- المشاريع
- ردود الشات بوت

## تعديل الصور

ضع الصور أو الملفات في هذه المجلدات:

```text
assets/certificates/
assets/awards/
assets/achievements/
assets/projects/
assets/profile/
assets/cv/
```

بعدها عدّل المسارات داخل `data/portfolio-data.js`.

## أسهل رفع: Netlify Drop

1. ادخل Netlify Drop.
2. اسحب مجلد المشروع كامل بعد فك الضغط.
3. انتظر النشر.
4. سيظهر لك رابط الموقع مباشرة.

## GitHub Pages

1. أنشئ Repository جديد.
2. ارفع ملفات المشروع كلها.
3. ادخل Settings ثم Pages.
4. اختر Deploy from branch.
5. اختر main و root.
6. احفظ وانتظر الرابط.

## ملاحظة خصوصية مهمة

قبل نشر الموقع بشكل عام، تأكد من إخفاء أي بيانات لا تريد ظهورها مثل:

- Passport No
- Candidate ID
- Certificate ID
- QR codes
- أي معلومات شخصية حساسة

الملف الحالي يستخدم الصور كما رفعتها أنت.

## تحديث جديد
تمت إضافة:
- حساب GitHub و X/Twitter بنفس اليوزر: amd11o
- شات بوت أعمق يشرح eJPT والشهادات والخبرة والمشاريع
- نافذة Latest Write-ups بشكل File Manager قريب من Kali
- إعدادات كاملة: اللغة، الألوان، حجم القراءة، نوع الخط، الوضع الليلي/الفاتح
- أوامر ترمينال إضافية مثل: `open writeups`, `open github`, `open twitter`, `settings`, `ejpt --info`

لإضافة ملفات Write-ups جديدة:
1. ضع PDF أو Markdown داخل `assets/writeups/`
2. افتح `data/portfolio-data.js`
3. أضف الملف داخل `writeupLibrary.files`

## تحديث V3
- الشات بوت صار يجاوب على أسئلة سايبر عامة + أسئلة عن أحمد.
- تمت إضافة صورة أحمد/الصورة السيبرانية في الواجهة.
- تمت إضافة تقرير SMAP الأصلي ونسخة محسنة احترافية تركز على إغلاق الثغرات.
- تمت إضافة أوامر ترمينال جديدة: `cgpa`, `cat report.txt`, `open smap-report`, `ask cyberbot`.
- اللغة العربية الآن تغير العناوين الرئيسية والوصف وواجهة الشات بوت والترمينال.

## قبل النشر العام
راجع الشهادات والتقارير وتأكد من إخفاء أي QR أو أرقام تحقق أو بيانات خاصة لا تريد نشرها.

## تحديث V4
- تمت إضافة شريط بحث واضح داخل CyberBot.
- أصبح CyberBot يجاوب عن أسئلة سايبر عامة وأسئلة عن أحمد مثل المعدل والشهادات والخبرة.
- تم جعل تقرير SMAP هو التقرير الأصلي بدون تعديل.
- تم تعبئة ملفات eJPT Exam Notes وSecurity+ Study Tips وKali Troubleshooting وSOC Notes وTools Cheatsheet وPersonal Growth وWindows Process Baseline.

## ملاحظة خاصة قبل الرفع

يوجد مجلد باسم:

```text
private_notes_for_ahmed_DO_NOT_UPLOAD
```

هذا المجلد مخصص كملاحظات خاصة لك فقط. إذا كنت تريد الموقع عام بدون هذه الملاحظات، لا ترفعه إلى الاستضافة.


## V6 Update
- Cleaned public-facing report labels and article wording.
- Upgraded CyberBot into a wider cyber command assistant with command explanations, tool notes, security concepts, and Ahmed-specific answers.
- Added Bot and Settings icons to the left rail navigation.
- Improved interactive rail icons, animations, and reader labels for a cleaner public portfolio experience.

## تحديث V7

تم إصلاح أزرار مهمة وتحسين تجربة القراءة:

- زر إغلاق CyberBot أصبح ظاهر وثابت.
- زر الإعدادات يفتح ويغلق من نفس الزر.
- الملاحظات لا تظهر كـ Markdown خام، بل تفتح داخل قارئ تفاعلي مرتب.
- تم حذف أزرار فتح الملف الخام ونسخ الرابط من قارئ الملاحظات.
- روابط المشاريع لم تعد تعيد تحميل الصفحة؛ الآن تفتح ملاحظات داخل الموقع.
- تمت إضافة عداد زيارات محلي للعرض داخل البورتفوليو.
- تمت إضافة معرفة أكبر داخل CyberBot لأوامر وأدوات الأمن السيبراني.

ملاحظة: عداد الزيارات الموجود يعمل محلياً على المتصفح لأنه موقع Static. لو تريد عداد عالمي حقيقي لكل الزوار، تحتاج ربط خدمة Analytics أو API بسيط.

## تحديث V8
- تم تحديث LinkedIn إلى `linkedin.com/in/amd11o`.
- تم إضافة Medium وTryHackMe بنفس اليوزر `amd11o`.
- تم إضافة ملاحظة TryHackMe Top 5 داخل الإحصائيات والبوت والترمينال والملاحظات.
- تم توسيع CyberBot وملاحظات الأدوات لتشمل أدوات Pentest وSOC وDFIR أكثر احترافية.



## ملاحظات النسخة الرسمية النهائية

- CyberBot أصبح درجاً من يسار الصفحة مثل فكرة Terminal من اليمين.
- Terminal يبقى من اليمين.
- روابط التواصل موجودة في Contact والفوتر والبار السفلي فقط حتى لا تتكرر كثيراً.
- تأثير الماوس أصبح أخف حتى لا يثقل اللابتوب.

## أفضل طريقة للنشر القابل للتعديل لاحقاً

أفضل طريقة هي رفع المشروع إلى GitHub Repository، ثم ربطه بمنصة نشر مجانية مثل GitHub Pages أو Netlify أو Cloudflare Pages أو Vercel.

طريقة العمل لاحقاً:
1. تعدل الملفات عندك.
2. ترفع التعديل إلى GitHub.
3. الموقع يتحدث تلقائياً أو من خلال إعادة Deploy حسب المنصة.
