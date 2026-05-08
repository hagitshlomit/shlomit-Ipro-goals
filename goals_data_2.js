const data2 = []; // כאן נוסיף בהדרגה את 7-250

// איחוד הנתונים בצורה שלא גורמת ל-X אדום
const goalsData = [...(typeof data1 !== 'undefined' ? data1 : []), ...data2];

// מנגנון שמציג את שאר המטרות מהמסמך כשלד כדי שהאתר לא יהיה ריק
const clusters = {
    "I AM": [1, 50], "I MIX": [51, 100], "I TASK": [101, 150], "I NET": [151, 200], "I GROW": [201, 250]
};

for (let i = 1; i <= 250; i++) {
    if (!goalsData.find(g => g.id === i)) {
        let currentCluster = "I AM";
        if (i > 50) currentCluster = "I MIX";
        if (i > 100) currentCluster = "I TASK";
        if (i > 150) currentCluster = "I NET";
        if (i > 200) currentCluster = "I GROW";
        
        goalsData.push({
            id: i,
            cluster: currentCluster,
            title: `מטרה ${i} - אשכול ${currentCluster}`,
            prob: `יש להזין תוכן עבור מטרה זו מהמסמך.`,
            goal: `מטרה מספר ${i}`,
            keywords: "",
            methods: ["ממתין לעדכון תוכן..."]
        });
    }
}
goalsData.sort((a, b) => a.id - b.id);
