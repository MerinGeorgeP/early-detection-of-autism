// Internationalization System
class I18n {
    constructor() {
        this.currentLanguage = localStorage.getItem('language') || 'en';
        this.translations = {};
        this.loadTranslations();
    }

    loadTranslations() {
        this.translations = {
            en: {
                // Header and Navigation
                appTitle: "Early Screening Tool",
                home: "Home",
                screening: "Screening",
                learnAboutAutism: "Learn About Autism",
                
                // Home Page
                heroTitle: "Early Development Screening Tool",
                heroSubtitle: "A simple questionnaire to help identify early signs of Autism Spectrum Disorder in children. This screening tool is designed to assist parents in monitoring their child's development.",
                startScreening: "Start Screening",
                learnAboutAutismBtn: "Learn About Autism",
                
                // Screening Questions
                questions: [
                    "Does your child line up toys or objects repeatedly?",
                    "Does your child respond when their name is called?",
                    "Does your child prefer playing alone rather than with others most of the time?",
                    "Does your child make eye contact while interacting with people?",
                    "Does your child get very upset if routines change?",
                    "Does your child imitate actions like clapping or waving?",
                    "Does your child repeat the same words or phrases frequently?",
                    "Does your child enjoy playing with other children?",
                    "Does your child stare at spinning objects like fans or wheels for long periods?",
                    "Does your child follow simple instructions like \"bring the ball\"?",
                    "Does your child show strong sensitivity to sounds, lights, or textures?",
                    "Does your child bring objects to show you something interesting?",
                    "Does your child become distressed by small environmental changes?",
                    "Does your child point to objects to show interest?",
                    "Does your child focus intensely on one object for a long time?",
                    "Does your child smile back when someone smiles at them?",
                    "Has your child ever lost speech or social skills they previously had?",
                    "Does your child use gestures such as waving goodbye or nodding yes/no?",
                    "Does your child repeatedly flap hands, rock, or spin their body?",
                    "Does your child engage in pretend play (like feeding a doll or pretending to cook)?"
                ],
                questionOf: "Question {{current}} of {{total}}",
                yes: "Yes",
                no: "No",
                
                // Results
                resultsTitle: "Screening Results",
                score: "Score",
                riskLevel: "Risk Level",
                lowRisk: "Low Risk",
                moderateRisk: "Moderate Risk", 
                highRisk: "High Risk",
                lowRiskDescription: "Your child shows few signs that may be associated with autism. Continue to monitor development and consult with your pediatrician during regular checkups.",
                lowRiskRecommendation: "Continue regular developmental monitoring and maintain open communication with your healthcare provider.",
                moderateRiskDescription: "Your child shows some signs that may be associated with autism. This warrants further evaluation by a healthcare professional.",
                moderateRiskRecommendation: "Consider scheduling a developmental screening with your pediatrician or a developmental specialist for a comprehensive evaluation.",
                highRiskDescription: "Your child shows several signs that may be associated with autism. Professional evaluation is strongly recommended.",
                highRiskRecommendation: "Please consult with your pediatrician, child psychologist, or developmental specialist as soon as possible for a comprehensive assessment.",
                recommendation: "Recommendation",
                retakeScreening: "Retake Screening",
                returnToHome: "Return to Home",
                downloadResults: "Download Results",
                
                // Education Section
                learnTitle: "Learn About Autism",
                whatIsAutism: "What is Autism",
                earlySigns: "Early Signs",
                whenToConsult: "When to Consult a Doctor",
                parentResources: "Parent Resources",
                whatIsAutismContent: "Autism Spectrum Disorder (ASD) is a developmental disorder that affects communication, social interaction, and behavior. It's called a \"spectrum\" because it affects people in different ways and to varying degrees.",
                earlySignsContent: "Early signs may include lack of eye contact, delayed speech, repetitive behaviors, difficulty with social interactions, and intense focus on specific interests. Early identification can lead to better outcomes.",
                whenToConsultContent: "If you notice developmental delays, loss of previously acquired skills, or concerns about your child's social communication, consult with your pediatrician or a developmental specialist for a comprehensive evaluation.",
                parentResourcesContent: "Connect with local autism support groups, early intervention services, and educational resources. Many organizations provide guidance, therapy options, and community support for families affected by autism.",
                
                // Footer
                about: "About",
                resources: "Resources",
                privacyPolicy: "Privacy Policy",
                termsOfUse: "Terms of Use",
                disclaimer: "Disclaimer: This screening tool is not a medical diagnosis. Please consult a qualified healthcare professional for evaluation.",
                aboutContent: "This tool helps parents identify potential early signs of autism for professional evaluation.",
                cdcInfo: "CDC Autism Information",
                autismSpeaks: "Autism Speaks",
                localSupport: "Local Support Groups",
                
                // Language
                language: "Language",
                selectLanguage: "Select Language",
                date: "Date",
                of: "of",
                disclaimerFull: "This screening tool is not a medical diagnosis. Please consult a qualified healthcare professional for evaluation.",
                loadingQuestion: "Loading question..."
            },
            
            es: {
                // Header and Navigation
                appTitle: "Herramienta de Detección Temprana",
                home: "Inicio",
                screening: "Evaluación",
                learnAboutAutism: "Aprende Sobre el Autismo",
                
                // Home Page
                heroTitle: "Herramienta de Evaluación del Desarrollo Temprano",
                heroSubtitle: "Un cuestionario simple para ayudar a identificar signos tempranos del Trastorno del Espectro Autista en niños. Esta herramienta de evaluación está diseñada para ayudar a los padres a monitorear el desarrollo de sus hijos.",
                startScreening: "Comenzar Evaluación",
                learnAboutAutismBtn: "Aprende Sobre el Autismo",
                
                // Screening Questions
                questions: [
                    "¿Su niño alinea juguetes u objetos repetidamente?",
                    "¿Su niño responde cuando lo llaman por su nombre?",
                    "¿Su niño prefiere jugar solo en lugar de con otros la mayor parte del tiempo?",
                    "¿Su niño hace contacto visual mientras interactúa con las personas?",
                    "¿Su niño se molesta mucho si cambian las rutinas?",
                    "¿Su niño imita acciones como aplaudir o saludar?",
                    "¿Su niño repite las mismas palabras o frases frecuentemente?",
                    "¿A su niño le gusta jugar con otros niños?",
                    "¿Su niño mira fijamente objetos giratorios como ventiladores o ruedas por largos períodos?",
                    "¿Su niño sigue instrucciones simples como \"trae la pelota\"?",
                    "¿Su niño muestra fuerte sensibilidad a sonidos, luces o texturas?",
                    "¿Su niño trae objetos para mostrarle algo interesante?",
                    "¿Su niño se angustia por pequeños cambios ambientales?",
                    "¿Su niño señala objetos para mostrar interés?",
                    "¿Su niño se enfoca intensamente en un objeto por mucho tiempo?",
                    "¿Su niño sonríe cuando alguien le sonríe?",
                    "¿Alguna vez su niño ha perdido el habla o habilidades sociales que tenía previamente?",
                    "¿Su niño usa gestos como saludar al despedirse o asentir con la cabeza para sí/no?",
                    "¿Su niño aletea las manos, se mece o gira su cuerpo repetidamente?",
                    "¿Su niño se involucra en juego de simulación (como alimentar una muñeca o pretender cocinar)?"
                ],
                questionOf: "Pregunta {{current}} de {{total}}",
                yes: "Sí",
                no: "No",
                
                // Results
                resultsTitle: "Resultados de la Evaluación",
                score: "Puntuación",
                riskLevel: "Nivel de Riesgo",
                lowRisk: "Riesgo Bajo",
                moderateRisk: "Riesgo Moderado",
                highRisk: "Riesgo Alto",
                lowRiskDescription: "Su niño muestra pocos signos que pueden estar asociados con el autismo. Continúe monitoreando el desarrollo y consulte con su pediatra durante los chequeos regulares.",
                lowRiskRecommendation: "Continúe el monitoreo del desarrollo regular y mantenga comunicación abierta con su proveedor de atención médica.",
                moderateRiskDescription: "Su niño muestra algunos signos que pueden estar asociados con el autismo. Esto justifica una evaluación adicional por un profesional de la salud.",
                moderateRiskRecommendation: "Considere programar una evaluación del desarrollo con su pediatra o un especialista en desarrollo para una evaluación integral.",
                highRiskDescription: "Su niño muestra varios signos que pueden estar asociados con el autismo. Se recomienda encarecidamente una evaluación profesional.",
                highRiskRecommendation: "Por favor consulte con su pediatra, psicólogo infantil o especialista en desarrollo lo antes posible para una evaluación integral.",
                recommendation: "Recomendación",
                retakeScreening: "Repetir Evaluación",
                returnToHome: "Volver al Inicio",
                downloadResults: "Descargar Resultados",
                
                // Education Section
                learnTitle: "Aprende Sobre el Autismo",
                whatIsAutism: "¿Qué es el Autismo",
                earlySigns: "Signos Tempranos",
                whenToConsult: "Cuándo Consultar a un Médico",
                parentResources: "Recursos para Padres",
                whatIsAutismContent: "El Trastorno del Espectro Autista (TEA) es un trastorno del desarrollo que afecta la comunicación, la interacción social y el comportamiento. Se llama \"espectro\" porque afecta a las personas de diferentes maneras y en diferentes grados.",
                earlySignsContent: "Los signos tempranos pueden incluir falta de contacto visual, retraso en el habla, comportamientos repetitivos, dificultad con las interacciones sociales y enfoque intenso en intereses específicos. La identificación temprana puede llevar a mejores resultados.",
                whenToConsultContent: "Si nota retrasos en el desarrollo, pérdida de habilidades previamente adquiridas, o preocupaciones sobre la comunicación social de su niño, consulte con su pediatra o un especialista en desarrollo para una evaluación integral.",
                parentResourcesContent: "Conéctese con grupos de apoyo locales de autismo, servicios de intervención temprana y recursos educativos. Muchas organizaciones proporcionan orientación, opciones de terapia y apoyo comunitario para familias afectadas por el autismo.",
                
                // Footer
                about: "Acerca de",
                resources: "Recursos",
                privacyPolicy: "Política de Privacidad",
                termsOfUse: "Términos de Uso",
                disclaimer: "Descargo de Responsabilidad: Esta herramienta de evaluación no es un diagnóstico médico. Por favor consulte con un profesional de la salud calificado para evaluación.",
                aboutContent: "Esta herramienta ayuda a los padres a identificar posibles signos tempranos de autismo para evaluación profesional.",
                cdcInfo: "Información sobre Autismo del CDC",
                autismSpeaks: "Autismo Habla",
                localSupport: "Grupos de Apoyo Locales",
                
                // Language
                language: "Idioma",
                selectLanguage: "Seleccionar Idioma",
                date: "Fecha",
                of: "de",
                disclaimerFull: "Esta herramienta de evaluación no es un diagnóstico médico. Por favor consulte con un profesional de la salud calificado para evaluación.",
                loadingQuestion: "Cargando pregunta..."
            },
            
            fr: {
                // Header and Navigation
                appTitle: "Outil de Dépistage Précoce",
                home: "Accueil",
                screening: "Dépistage",
                learnAboutAutism: "Apprendre sur l'Autisme",
                
                // Home Page
                heroTitle: "Outil de Dépistage du Développement Précoce",
                heroSubtitle: "Un questionnaire simple pour aider à identifier les premiers signes du Trouble du Spectre de l'Autisme chez les enfants. Cet outil de dépistage est conçu pour aider les parents à surveiller le développement de leur enfant.",
                startScreening: "Commencer le Dépistage",
                learnAboutAutismBtn: "Apprendre sur l'Autisme",
                
                // Screening Questions
                questions: [
                    "Votre enfant aligne-t-il des jouets ou des objets de manière répétitive ?",
                    "Votre enfant répond-il quand on l'appelle par son prénom ?",
                    "Votre enfant préfère-t-il jouer seul plutôt qu'avec d'autres la plupart du temps ?",
                    "Votre enfant établit-il un contact visuel lors des interactions avec les personnes ?",
                    "Votre enfant se fâche-t-il beaucoup si les routines changent ?",
                    "Votre enfant imite-t-il des actions comme applaudir ou saluer ?",
                    "Votre enfant répète-t-il les mêmes mots ou phrases fréquemment ?",
                    "Votre enfant aime-t-il jouer avec d'autres enfants ?",
                    "Votre enfant fixe-t-il des objets en rotation comme des ventilateurs ou des roues pendant de longues périodes ?",
                    "Votre enfant suit-il des instructions simples comme \"apporte la balle\" ?",
                    "Votre enfant montre-t-il une forte sensibilité aux sons, lumières ou textures ?",
                    "Votre enfant apporte-t-il des objets pour vous montrer quelque chose d'intéressant ?",
                    "Votre enfant se détresse-t-il face à de petits changements environnementaux ?",
                    "Votre enfant pointe-t-il des objets pour montrer son intérêt ?",
                    "Votre enfant se concentre-t-il intensément sur un objet pendant longtemps ?",
                    "Votre enfant sourit-il en retour quand quelqu'un lui sourit ?",
                    "Votre enfant a-t-il déjà perdu le langage ou des compétences sociales qu'il avait précédemment ?",
                    "Votre enfant utilise-t-il des gestes comme saluer ou hocher la tête pour oui/non ?",
                    "Votre enfant agite-t-il les mains, se balance-t-il ou tourne-t-il sur lui-même de manière répétitive ?",
                    "Votre enfant s'engage-t-il dans le jeu de simulation (comme nourrir une poupée ou prétendre cuisiner) ?"
                ],
                questionOf: "Question {{current}} de {{total}}",
                yes: "Oui",
                no: "Non",
                
                // Results
                resultsTitle: "Résultats du Dépistage",
                score: "Score",
                riskLevel: "Niveau de Risque",
                lowRisk: "Faible Risque",
                moderateRisk: "Risque Modéré",
                highRisk: "Risque Élevé",
                lowRiskDescription: "Votre enfant montre peu de signes pouvant être associés à l'autisme. Continuez à surveiller le développement et consultez votre pédiatre lors des contrôles réguliers.",
                lowRiskRecommendation: "Continuez la surveillance du développement régulier et maintenez une communication ouverte avec votre professionnel de santé.",
                moderateRiskDescription: "Votre enfant montre certains signes pouvant être associés à l'autisme. Cela justifie une évaluation supplémentaire par un professionnel de santé.",
                moderateRiskRecommendation: "Envisagez de programmer un dépistage du développement avec votre pédiatre ou un spécialiste du développement pour une évaluation complète.",
                highRiskDescription: "Votre enfant montre plusieurs signes pouvant être associés à l'autisme. Une évaluation professionnelle est fortement recommandée.",
                highRiskRecommendation: "Veuillez consulter votre pédiatre, psychologue pour enfants ou spécialiste du développement dès que possible pour une évaluation complète.",
                recommendation: "Recommandation",
                retakeScreening: "Refaire le Dépistage",
                returnToHome: "Retour à l'Accueil",
                downloadResults: "Télécharger les Résultats",
                
                // Education Section
                learnTitle: "Apprendre sur l'Autisme",
                whatIsAutism: "Qu'est-ce que l'Autisme",
                earlySigns: "Signes Précoces",
                whenToConsult: "Quand Consulter un Médecin",
                parentResources: "Ressources Parentales",
                whatIsAutismContent: "Le Trouble du Spectre de l'Autisme (TSA) est un trouble du développement qui affecte la communication, l'interaction sociale et le comportement. On l'appelle \"spectre\" car il affecte les personnes de différentes manières et à des degrés variables.",
                earlySignsContent: "Les signes précoces peuvent inclure un manque de contact visuel, un retard de langage, des comportements répétitifs, des difficultés d'interaction sociale et une concentration intense sur des intérêts spécifiques. Une identification précoce peut mener à de meilleurs résultats.",
                whenToConsultContent: "Si vous remarquez des retards de développement, une perte de compétences précédemment acquises, ou des préoccupations concernant la communication sociale de votre enfant, consultez votre pédiatre ou un spécialiste du développement pour une évaluation complète.",
                parentResourcesContent: "Connectez-vous avec des groupes de soutien locaux de l'autisme, des services d'intervention précoce et des ressources éducatives. De nombreuses organisations fournissent des conseils, des options de thérapie et un soutien communautaire aux familles touchées par l'autisme.",
                
                // Footer
                about: "À Propos",
                resources: "Ressources",
                privacyPolicy: "Politique de Confidentialité",
                termsOfUse: "Conditions d'Utilisation",
                disclaimer: "Avertissement : Cet outil de dépistage n'est pas un diagnostic médical. Veuillez consulter un professionnel de santé qualifié pour évaluation.",
                aboutContent: "Cet outil aide les parents à identifier les premiers signes potentiels d'autisme pour évaluation professionnelle.",
                cdcInfo: "Informations sur l'Autisme du CDC",
                autismSpeaks: "Autisme Speaks",
                localSupport: "Groupes de Soutien Locaux",
                
                // Language
                language: "Langue",
                selectLanguage: "Sélectionner la Langue",
                date: "Date",
                of: "de",
                disclaimerFull: "Avertissement : Cet outil de dépistage n'est pas un diagnostic médical. Veuillez consulter un professionnel de santé qualifié pour évaluation.",
                loadingQuestion: "Chargement de la question..."
            },
            
            hi: {
                // Header and Navigation
                appTitle: "प्रारंभिक स्क्रीनिंग टूल",
                home: "होम",
                screening: "स्क्रीनिंग",
                learnAboutAutism: "ऑटिज्म के बारे में जानें",
                
                // Home Page
                heroTitle: "प्रारंभिक विकास स्क्रीनिंग टूल",
                heroSubtitle: "बच्चों में ऑटिज्म स्पेक्ट्रम डिसऑर्डर के प्रारंभिक संकेतों की पहचान करने में मदद करने के लिए एक सरल प्रश्नावानी। यह स्क्रीनिंग टूल माता-पिता को अपने बच्चे के विकास पर नज़र रखने में सहायता करने के लिए डिज़ाइन किया गया है।",
                startScreening: "स्क्रीनिंग शुरू करें",
                learnAboutAutismBtn: "ऑटिज्म के बारे में जानें",
                
                // Screening Questions
                questions: [
                    "क्या आपका बच्चा बार-बार खिलौने या वस्तुओं को पंक्ति में लगाता है?",
                    "क्या आपका बच्चा अपने नाम बुलाए जाने पर प्रतिक्रिया करता है?",
                    "क्या आपका बच्चा ज़्यादातर अकेले खेलना पसंद करता है बजाय दूसरों के साथ?",
                    "क्या आपका बच्चा लोगों के साथ बातचीत करते समय आँखों में आँखों में देखता है?",
                    "क्या आपका बच्चा दिनचर्या में बदलाव होने पर बहुत परेशान हो जाता है?",
                    "क्या आपका बच्चा ताली बजाना या हाथ हिलाना जैसी क्रियाओं की नकल करता है?",
                    "क्या आपका बच्चा बार-बार एक ही शब्दों या वाक्यों को दोहराता है?",
                    "क्या आपका बच्चा दूसरे बच्चों के साथ खेलने का आनंद लेता है?",
                    "क्या आपका बच्चा पंखे या पहियों जैसे घूमने वाली वस्तुओं को लंबे समय तक घूरता है?",
                    "क्या आपका बच्चा \"गेंद लाओ\" जैसे सरल निर्देशों का पालन करता है?",
                    "क्या आपका बच्चा ध्वनियों, प्रकाश या बनावटों के प्रति मजबूत संवेदनशीलता दिखाता है?",
                    "क्या आपका बच्चा आपको कुछ दिलचस्प दिखाने के लिए वस्तुएं लाता है?",
                    "क्या आपका बच्चा छोटे पर्यावरणीय परिवर्तनों से परेशान हो जाता है?",
                    "क्या आपका बच्चा रुचि दिखाने के लिए वस्तुओं की ओर इशारा करता है?",
                    "क्या आपका बच्चा लंबे समय तक एक वस्तु पर तीव्र ध्यान केंद्रित करता है?",
                    "क्या आपका बच्चा किसी के मुस्कुराने पर मुस्कुराकर वापस मुस्कुराता है?",
                    "क्या आपके बच्चे ने कभी पहले से थी भाषण या सामाजिक कौशल खो दिए हैं?",
                    "क्या आपका बच्चा अलविदा जैसे हाथ हिलाना या हाँ/ना में सिर हिलाना जैसे इशारों का उपयोग करता है?",
                    "क्या आपका बच्चा बार-बार हाथ फड़फड़ाता है, झूलता है, या अपने शरीर को घुमाता है?",
                    "क्या आपका बच्चा नकली खेल (जैसे गुड़िया खिलाना या खाना बनाने का नाटन करना) में संलग्न होता है?"
                ],
                questionOf: "प्रश्न {{current}} {{total}} का",
                yes: "हाँ",
                no: "नहीं",
                
                // Results
                resultsTitle: "स्क्रीनिंग परिणाम",
                score: "स्कोर",
                riskLevel: "जोखिम स्तर",
                lowRisk: "कम जोखिम",
                moderateRisk: "मध्यम जोखिम",
                highRisk: "उच्च जोखिम",
                lowRiskDescription: "आपके बच्चे में ऑटिज्म से जुड़ी कुछ संकेत कम हैं। नियमित जांच के दौरान विकास पर नज़र रखें और अपने बाल रोग विशेषज्ञ से परामर्श करें।",
                lowRiskRecommendation: "नियमित विकास निगरानी जारी रखें और अपने स्वास्थ्य देखभाल प्रदाता के साथ खुली संचार बनाएं रखें।",
                moderateRiskDescription: "आपके बच्चे में ऑटिज्म से जुड़ी कुछ संकेत हैं। इसके लिए स्वास्थ्य पेशेवर द्वारा आगे का मूल्यांकन आवश्यक है।",
                moderateRiskRecommendation: "एक व्यापक मूल्यांकन के लिए अपने बाल रोग विशेषज्ञ या विकास विशेषज्ञ के साथ एक विकास स्क्रीनिंग शेड्यूल करने पर विचार करें।",
                highRiskDescription: "आपके बच्चे में ऑटिज्म से जुड़ी कई संकेत हैं। पेशेवर मूल्यांकन की जोर सिफारिश है।",
                highRiskRecommendation: "कृपया एक व्यापक मूल्यांकन के लिए जल्दी से अपने बाल रोग विशेषज्ञ, बाल चिकित्सक या विकास विशेषज्ञ से परामर्श करें।",
                recommendation: "सिफारिश",
                retakeScreening: "स्क्रीनिंग दोहराएं",
                returnToHome: "होम पर वापस जाएं",
                downloadResults: "परिणाम डाउनलोड करें",
                
                // Education Section
                learnTitle: "ऑटिज्म के बारे में जानें",
                whatIsAutism: "ऑटिज्म क्या है",
                earlySigns: "प्रारंभिक संकेत",
                whenToConsult: "डॉक्टर से कब सलाह लें",
                parentResources: "माता-पिता संसाधन",
                whatIsAutismContent: "ऑटिज्म स्पेक्ट्रम डिसऑर्डर (ASD) एक विकास विकार है जो संचार, सामाजिक बातचीत और व्यवहार को प्रभावित करता है। इसे \"स्पेक्ट्रम\" कहा जाता है क्योंकि यह लोगों को अलग-अलग तरीकों से और विभिन्न डिग्री से प्रभावित करता है।",
                earlySignsContent: "प्रारंभिक संकेतों में आँखों में आँखों में देखने की कमी, भाषण में देरी, दोहराव व्यवहार, सामाजिक बातचीत में कठिनाई और विशिष्ट रुचियों पर तीव्र ध्यान शामिल हो सकते हैं। प्रारंभिक पहचान बेहतर परिणामों की ओर ले जा सकती है।",
                whenToConsultContent: "यदि आपको विकास में देरी, पहले से प्राप्त कौशल या सामाजिक कौशल का नुकसान, या आपके बच्चे की सामाजिक संचार के बारे में चिंता है, तो एक व्यापक मूल्यांकन के लिए अपने बाल रोग विशेषज्ञ या विकास विशेषज्ञ से परामर्श करें।",
                parentResourcesContent: "स्थानीय ऑटिज्म समर्थन समूहों, प्रारंभिक हस्तक्षेप सेवाओं और शैक्षिक संसाधनों से जुड़ें। कई संगठन ऑटिज्म से प्रभावित परिवारों के लिए मार्गदर्शन, थेरेपी विकल्प और सामुदायिक समर्थन प्रदान करते हैं।",
                
                // Footer
                about: "के बारे में",
                resources: "संसाधन",
                privacyPolicy: "गोपनीयता नीति",
                termsOfUse: "उपयोग की शर्तें",
                disclaimer: "डिस्क्लेमर: यह स्क्रीनिंग टूल एक चिकित्सा निदान नहीं है। कृपया मूल्यांकन के लिए एक योग्य स्वास्थ्य देखभाल पेशेवर से परामर्श करें।",
                aboutContent: "यह टूल माता-पिताओं को पेशेवर मूल्यांकन के लिए ऑटिज्म के संभावित प्रारंभिक संकेतों की पहचान करने में मदद करता है।",
                cdcInfo: "CDC ऑटिज्म जानकारी",
                autismSpeaks: "ऑटिज्म स्पीक्स",
                localSupport: "स्थानीय समर्थन समूह",
                
                // Language
                language: "भाषा",
                selectLanguage: "भाषा चुनें",
                date: "दिनांक",
                of: "का",
                disclaimerFull: "डिस्क्लेमर: यह स्क्रीनिंग टूल एक चिकित्सा निदान नहीं है। कृपया मूल्यांकन के लिए एक योग्य स्वास्थ्य देखभाल पेशेवर से परामर्श करें।",
                loadingQuestion: "प्रश्न लोड हो रही है..."
            }
        };
    }

    t(key, params = {}) {
        const translation = this.translations[this.currentLanguage][key];
        if (!translation) return key;
        
        return translation.replace(/\{\{(\w+)\}\}/g, (match, param) => {
            return params[param] || match;
        });
    }

    setLanguage(lang) {
        if (this.translations[lang]) {
            this.currentLanguage = lang;
            localStorage.setItem('language', lang);
            this.updateUI();
        }
    }

    updateUI() {
        // Update all translatable elements
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            const params = JSON.parse(element.getAttribute('data-i18n-params') || '{}');
            element.textContent = this.t(key, params);
        });
        
        // Update HTML lang attribute
        document.documentElement.lang = this.currentLanguage;
        
        // Update page title
        const titleKey = document.title.includes('Screening') ? 'appTitle' : 'appTitle';
        document.title = this.t(titleKey);
        
        // Update navigation active states
        this.updateNavigation();
    }

    updateNavigation() {
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });
        
        const currentPage = document.querySelector('.page.active');
        if (currentPage) {
            const pageId = currentPage.id;
            const correspondingLink = document.querySelector(`.nav-link[href="#${pageId}"]`);
            if (correspondingLink) {
                correspondingLink.classList.add('active');
            }
        }
    }

    getAvailableLanguages() {
        return Object.keys(this.translations).map(code => ({
            code,
            name: this.getLanguageName(code)
        }));
    }

    getLanguageName(code) {
        const names = {
            en: 'English',
            es: 'Español',
            fr: 'Français',
            hi: 'हिन्दी'
        };
        return names[code] || code;
    }

    getCurrentLanguage() {
        return this.currentLanguage;
    }
}

// Initialize i18n
const i18n = new I18n();
