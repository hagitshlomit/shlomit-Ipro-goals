// איחוד הנתונים - מוודא שהאתר מכיר את data1
const goalsData = [...(typeof data1 !== 'undefined' ? data1 : [])];

// מנגנון השלמה חכם ליתר המטרות (51-250) - כרגע כברירת מחדל עד שנעדכן אותן
const clusterLabels = {
    "IMIX": "תקשורת", "ITASK": "ניהול משימה", "INET": "תעסוקה", "IGROW": "עצמאות"
};

for (let i = 1; i <= 250; i++) {
    if (!goalsData.find(g => g.id === i)) {
        let clus = i <= 50 ? "IAM" : i <= 100 ? "IMIX" : i <= 150 ? "ITASK" : i <= 200 ? "INET" : "IGROW";
        goalsData.push({
            id: i,
            cluster: clus,
            title: `מטרה ${i} - אשכול ${clusterLabels[clus] || clus}`,
            prob: `יש להעתיק את הבעיה עבור מטרה ${i} מהמסמך.`,
            goal: `שיפור המיומנות הנדרשת ביעד ${i}.`,
            keywords: `מטרה ${i}, ${clus}`,
            methods: [
                "זיהוי הקושי", "שימוש בכלי דיגיטלי", "סימולציה", "יישום", "משוב"
            ]
        });
    }
}
goalsData.sort((a, b) => a.id - b.id);
