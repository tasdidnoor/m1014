// --- CONFIGURATION ---

// 1. Chapters in the exact order provided
const assignedChapters = [
    "6.1", "6.2", "6.4", "5.5", 
    "7.1", "7.2", "7.3", "7.4", "7.8", "7.5", "7.7",
    "11.1", "11.2", "11.3", "11.4", "11.5", "11.6", "11.7", "11.8", "11.9", "11.10", "11.11",
    "9.1", "9.2", "9.3",
    "10.1", "10.3"
];

// Helper function to generate odd numbers in a range
const getOdds = (start, end) => {
    let arr = [];
    for (let i = start; i <= end; i++) { if (i % 2 !== 0) arr.push(i); }
    return arr;
};

// 2. Specific questions for each chapter
const assignedQuestions = {
    "5.5": [...getOdds(1, 54), ...getOdds(59, 80)],
    "6.1": [1, 2, 3, 4, 5, 7, 9, 18, 22, 31, 58, 61],
    "6.2": [1, 2, 3, 5, 8, 41, 44, 49, 51, 54, 59],
    "6.4": [3, 4, 5, 7, 9, 13, 16],
    "7.1": [1, 3, 5, 11, 13, 15, 19, 29, 37, 39, 43, 47, 35, 75, 77],
    "7.2": [1, 3, 5, 7, 13, 15, 21, 23, 27, 29, 33, 35, 46, 47, 49, 51, 64, 65],
    "7.3": [1, 3, 5, 7, 9, 11, 15, 17, 19, 23, 29, 33, 40, 43],
    "7.4": [7, 9, 11, 13, 41, 70],
    "7.5": [1, 3, 7, 9, 11, 13, 15, 17, 19, 21, 25, 27, 39],
    "7.7": [1, 3, "5a", "7a", "7b", 19, "29a", "29b", 31, 45],
    "7.8": [1, 3, 5, 7, 9, 13, 19, 21, 23, 27, 25, 35, 39, 44, 47, 65, 77, 83, 91],
    "9.1": [4, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25],
    "9.2": [1, 3, 5, 7, 9, 11, 13],
    "9.3": [1, 3, 5, 9, 11, 13, 17, 23, 31, 33, 35],
    "10.1": [1, 3, 7, 9, 11, 15, 19, 21, 23, 27, 31, 33, 39, 41, 45, 57],
    "10.3": [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 37, 41],
    "11.1": [3, 5, 9, 15, 17, 18, 19, 22, 27, 28, 29, 35, 36, 37, 38, 41, 47, 48],
    "11.2": [3, 4, 15, 17, 19, 20, 21, 23, 24, 25, 26, 27, 28, 29, 33, 34, 35, 39, 59, 63, 71, 75],
    "11.3": [3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 31, 33],
    "11.4": [3, 5, 7, 9, 10, 11, 19, 27],
    "11.5": [3, 5, 7, 13, 15, 23, 25, 27, 29],
    "11.6": [3, 5, 7, 9, 13, 21, 23, 29, 33, 35],
    "11.7": [1, 3, 5, 11, 13, 17, 23, 35],
    "11.8": [3, 5, 7, 11, 13, 19, 23, 35],
    "11.9": [7, 9, 13, 15, 17, 27],
    "11.10": [1, 3, 5, 7, 9, 11, 17, 21, 23, 27, 35, 37, 39, 43, 49, 55, 79, 81, 83, 85],
    "11.11": [1, 3, 5, 7, 9, 13, 15, 21, 23, 27, 33, 37]
};

// 3. Solution & Question Data
const questionData = {
    // CHAPTER 11.1
    "11.1-3": { text: "a<sub>n</sub> = n<sup>3</sup> - 1. Find the first five terms.", answer: "0, 7, 26, 63, 124" },
    "11.1-4": { text: "a<sub>n</sub> = <div class='math-frac'><span class='top'>1</span><span class='bottom'>3<sup>n</sup> + 1</span></div>. Find the first five terms.", answer: "1/4, 1/10, 1/28, 1/82, 1/244" },
    "11.1-5": { text: "{2<sup>n</sup> + n}<sub>n=2</sub><sup>∞</sup>. Find the first five terms.", answer: "6, 11, 20, 37, 70" },
    "11.1-9": { text: "a<sub>n</sub> = cos(nπ). Find the first five terms.", answer: "-1, 1, -1, 1, -1" },
    "11.1-15": { text: "a<sub>1</sub> = 2, a<sub>n+1</sub> = <div class='math-frac'><span class='top'>a<sub>n</sub></span><span class='bottom'>1 + a<sub>n</sub></span></div>. Find the first five terms.", answer: "2, 2/3, 2/5, 2/7, 2/9" },
    "11.1-17": { text: "{ 1/2, 1/4, 1/6, 1/8, 1/10, ... }. Find a formula for a<sub>n</sub>.", answer: "1/(2n)" },
    "11.1-18": { text: "{ 4, -1, 1/4, -1/16, 1/64, ... }. Find a formula for a<sub>n</sub>.", answer: "((-1)^(n-1))/4^(n-2)" },
    "11.1-19": { text: "{ -3, 2, -4/3, 8/9, -16/27, ... }. Find a formula for a<sub>n</sub>.", answer: "-3(-2/3)^(n-1)" },
    "11.1-22": { text: "{ 1, 0, -1, 0, 1, 0, -1, 0, ... }. Find a formula for a<sub>n</sub>.", answer: "cos((n-1)π/2)" },
    "11.1-27": { text: "a<sub>n</sub> = <div class='math-frac'><span class='top'>5</span><span class='bottom'>n + 2</span></div>. Determine convergence or divergence; if converges, find limit.", type: "limit", answer: "0" },
    "11.1-28": { text: "a<sub>n</sub> = 5<span class='math-sqrt-symbol'>√</span><span class='math-sqrt'>n</span> + 2. Determine convergence or divergence; if converges, find limit.", type: "limit", answer: "diverges" },
    "11.1-29": { text: "a<sub>n</sub> = <div class='math-frac'><span class='top'>4n<sup>2</sup> - 3n</span><span class='bottom'>2n<sup>2</sup> + 1</span></div>. Determine convergence or divergence; if converges, find limit.", type: "limit", answer: "2" },
    "11.1-35": { text: "a<sub>n</sub> = e<sup>-1/<span class='math-sqrt-symbol'>√</span><span class='math-sqrt'>n</span></sup>. Determine convergence or divergence; if converges, find limit.", type: "limit", answer: "1" },
    "11.1-36": { text: "a<sub>n</sub> = <div class='math-frac'><span class='top'>4<sup>n</sup></span><span class='bottom'>1 + 9<sup>n</sup></span></div>. Determine convergence or divergence; if converges, find limit.", type: "limit", answer: "0" },
    "11.1-37": { text: "a<sub>n</sub> = <span class='math-sqrt-symbol'>√</span><span class='math-sqrt'><div class='math-frac'><span class='top'>1 + 4n<sup>2</sup></span><span class='bottom'>1 + n<sup>2</sup></span></div></span>. Determine convergence or divergence; if converges, find limit.", type: "limit", answer: "2" },
    "11.1-38": { text: "a<sub>n</sub> = cos(<div class='math-frac'><span class='top'>nπ</span><span class='bottom'>n + 1</span></div>). Determine convergence or divergence; if converges, find limit.", type: "limit", answer: "-1" },
    "11.1-41": { text: "a<sub>n</sub> = <div class='math-frac'><span class='top'>(-1)<sup>n</sup></span><span class='bottom'>2<span class='math-sqrt-symbol'>√</span><span class='math-sqrt'>n</span></span></div>. Determine convergence or divergence; if converges, find limit.", type: "limit", answer: "0" },
    "11.1-47": { text: "{ n<sup>2</sup> e<sup>-n</sup> }. Determine convergence or divergence; if converges, find limit.", type: "limit", answer: "0" },
    "11.1-48": { text: "a<sub>n</sub> = ln(n+1) - ln(n). Determine convergence or divergence; if converges, find limit.", type: "limit", answer: "0" },

    // CHAPTER 11.2
    "11.2-3": { text: "Find the sum of the series ∑<sub>n=1</sub><sup>∞</sup> a<sub>n</sub> whose partial sums are given by s<sub>n</sub> = 2 - 3(0.8)<sup>n</sup>", answer: "2" },
    "11.2-4": { text: "Find the sum of the series ∑<sub>n=1</sub><sup>∞</sup> a<sub>n</sub> whose partial sums are given by s<sub>n</sub> = <div class='math-frac'><span class='top'>n<sup>2</sup> - 1</span><span class='bottom'>4n<sup>2</sup> + 1</span></div>", answer: "1/4" },
    "11.2-15": { 
        text: "Let a<sub>n</sub> = <div class='math-frac'><span class='top'>2n</span><span class='bottom'>3n + 1</span></div>.<br>a. Is {a<sub>n</sub>} convergent?<br>b. Is ∑ a<sub>n</sub> convergent?",
        parts: [
            { label: "Part a (Limit)", type: "limit", answer: "2/3" },
            { label: "Part b (Series)", type: "limit", answer: "diverges" }
        ]
    },
    "11.2-17": { text: "Determine whether the series is convergent or divergent: ∑<sub>n=1</sub><sup>∞</sup> (<div class='math-frac'><span class='top'>1</span><span class='bottom'>n + 2</span></div> - <div class='math-frac'><span class='top'>1</span><span class='bottom'>n</span></div>)", type: "limit", answer: "-3/2" },
    "11.2-19": { text: "Determine whether the series is convergent or divergent: ∑<sub>n=1</sub><sup>∞</sup> <div class='math-frac'><span class='top'>3</span><span class='bottom'>n(n + 3)</span></div>", type: "limit", answer: "11/6" },
    "11.2-20": { text: "Determine whether the series is convergent or divergent: ∑<sub>n=1</sub><sup>∞</sup> ln(<div class='math-frac'><span class='top'>n</span><span class='bottom'>n + 1</span></div>)", type: "limit", answer: "diverges" },
    "11.2-21": { text: "Determine whether the series is convergent or divergent: ∑<sub>n=1</sub><sup>∞</sup> (e<sup>1/n</sup> - e<sup>1/(n+1)</sup>)", type: "limit", answer: "e-1" },
    "11.2-23": { text: "Determine if the geometric series converges or diverges: <div class='math-frac'><span class='top'>16</span><span class='bottom'>3</span></div> - <div class='math-frac'><span class='top'>64</span><span class='bottom'>9</span></div> + ...", type: "limit", answer: "diverges" },
    "11.2-24": { text: "Determine if the geometric series converges or diverges: <div class='math-frac'><span class='top'>9</span><span class='bottom'>4</span></div> + <div class='math-frac'><span class='top'>27</span><span class='bottom'>16</span></div> + ...", type: "limit", answer: "9/2" },
    "11.2-25": { text: "Determine if the geometric series converges or diverges: 10 - 2 + 0.4 - 0.08 + ...", type: "limit", answer: "25/3" },
    "11.2-26": { text: "Determine if the geometric series converges or diverges: 2 + 0.5 + 0.125 + 0.03125 + ...", type: "limit", answer: "8/3" },
    "11.2-27": { text: "Determine if the geometric series converges or diverges: ∑<sub>n=1</sub><sup>∞</sup> 12(0.73)<sup>n-1</sup>", type: "limit", answer: "400/9" },
    "11.2-28": { text: "Determine if the geometric series converges or diverges: ∑<sub>n=1</sub><sup>∞</sup> <div class='math-frac'><span class='top'>5</span><span class='bottom'>π<sup>n</sup></span></div>", type: "limit", answer: "5/(π-1)" },
    "11.2-29": { text: "Determine if the geometric series converges or diverges: ∑<sub>n=1</sub><sup>∞</sup> <div class='math-frac'><span class='top'>(-3)<sup>n-1</sup></span><span class='bottom'>4<sup>n</sup></span></div>", type: "limit", answer: "1/7" },
    "11.2-33": { text: "Convergent or divergent? <div class='math-frac'><span class='top'>1</span><span class='bottom'>3</span></div> + <div class='math-frac'><span class='top'>1</span><span class='bottom'>6</span></div> + <div class='math-frac'><span class='top'>1</span><span class='bottom'>9</span></div> + ...", type: "limit", answer: "diverges" },
    "11.2-34": { text: "Convergent or divergent? <div class='math-frac'><span class='top'>1</span><span class='bottom'>2</span></div> + <div class='math-frac'><span class='top'>2</span><span class='bottom'>3</span></div> + <div class='math-frac'><span class='top'>3</span><span class='bottom'>4</span></div> + ...", type: "limit", answer: "diverges" },
    "11.2-35": { text: "Convergent or divergent? <div class='math-frac'><span class='top'>2</span><span class='bottom'>5</span></div> + <div class='math-frac'><span class='top'>4</span><span class='bottom'>25</span></div> + <div class='math-frac'><span class='top'>8</span><span class='bottom'>125</span></div> + ...", type: "limit", answer: "2/3" },
    "11.2-39": { text: "Convergent or divergent? ∑<sub>n=1</sub><sup>∞</sup> 3<sup>n+1</sup> 4<sup>-n</sup>", type: "limit", answer: "9" },
    "11.2-59": { text: "For what values of x does the series converge? ∑<sub>n=1</sub><sup>∞</sup> (-5)<sup>n</sup> x<sup>n</sup>", answer: "|x|<1/5" },
    "11.2-63": { text: "For what values of x does the series converge? ∑<sub>n=0</sub><sup>∞</sup> <div class='math-frac'><span class='top'>2<sup>n</sup></span><span class='bottom'>x<sup>n</sup></span></div>", answer: "|x|>2" },
    "11.2-71": { 
        text: "A doctor prescribes a 100-mg antibiotic tablet to be taken every eight hours. It is known that the body eliminates 75% of the drug in eight hours.<br><br>a. How much of the drug is in the body just after the second tablet is taken? After the third tablet?<br>b. If Q<sub>n</sub> is the quantity of the antibiotic in the body just after the n-th tablet is taken, find an equation that expresses Q<sub>n+1</sub> in terms of Q<sub>n</sub>.<br>c. What quantity of the antibiotic remains in the body in the long run?",
        parts: [
            { label: "Part a (2nd tablet)", answer: "125" },
            { label: "Part a (3rd tablet)", answer: "131.25" },
            { label: "Part b (Equation)", answer: "Qn+1 = 0.25Qn + 100" },
            { label: "Part c (Long run)", answer: "400/3" }
        ]
    },
    "11.2-75": { 
        text: "When money is spent on goods and services, those who receive the money also spend some of it. ... Suppose each recipient spends 100c% and saves 100s%.<br><br>a. Find an equation for S<sub>n</sub>.<br>b. What is k if the marginal propensity to consume is 80%?",
        parts: [
            { label: "Part a (Equation)", answer: "Sn = D(1-c^n)/(1-c)" },
            { label: "Part b (Value of k)", answer: "5" }
        ]
    },

    // CHAPTER 11.3
    "11.3-3": { text: "Use the Integral Test to determine whether the series is convergent or divergent.<br>∑<sub>n=1</sub><sup>∞</sup> n<sup>-3</sup>", type: "conv_only", answer: "converges" },
    "11.3-5": { text: "Use the Integral Test to determine whether the series is convergent or divergent.<br>∑<sub>n=1</sub><sup>∞</sup> <div class='math-frac'><span class='top'>2</span><span class='bottom'>5n - 1</span></div>", type: "conv_only", answer: "diverges" },
    "11.3-7": { text: "Use the Integral Test to determine whether the series is convergent or divergent.<br>∑<sub>n=1</sub><sup>∞</sup> <div class='math-frac'><span class='top'>n<sup>2</sup></span><span class='bottom'>n<sup>3</sup> + 1</span></div>", type: "conv_only", answer: "diverges" },
    "11.3-9": { text: "Use the Integral Test to determine whether the series is convergent or divergent.<br>∑<sub>n=2</sub><sup>∞</sup> <div class='math-frac'><span class='top'>1</span><span class='bottom'>n(ln n)<sup>3</sup></span></div>", type: "conv_only", answer: "converges" },
    "11.3-11": { text: "Determine whether the series is convergent or divergent.<br>∑<sub>n=1</sub><sup>∞</sup> <div class='math-frac'><span class='top'>1</span><span class='bottom'>n<sup><span class='math-sqrt-symbol'>√</span><span class='math-sqrt'>2</span></sup></span></div>", type: "conv_only", answer: "converges" },
    "11.3-13": { text: "Determine whether the series is convergent or divergent.<br>1 + <div class='math-frac'><span class='top'>1</span><span class='bottom'>8</span></div> + <div class='math-frac'><span class='top'>1</span><span class='bottom'>27</span></div> + <div class='math-frac'><span class='top'>1</span><span class='bottom'>64</span></div> + <div class='math-frac'><span class='top'>1</span><span class='bottom'>125</span></div> + ...", type: "conv_only", answer: "converges" },
    "11.3-15": { text: "Determine whether the series is convergent or divergent.<br><div class='math-frac'><span class='top'>1</span><span class='bottom'>3</span></div> + <div class='math-frac'><span class='top'>1</span><span class='bottom'>7</span></div> + <div class='math-frac'><span class='top'>1</span><span class='bottom'>11</span></div> + <div class='math-frac'><span class='top'>1</span><span class='bottom'>15</span></div> + <div class='math-frac'><span class='top'>1</span><span class='bottom'>19</span></div> + ...", type: "conv_only", answer: "diverges" },
    "11.3-17": { text: "Determine whether the series is convergent or divergent.<br>∑<sub>n=1</sub><sup>∞</sup> <div class='math-frac'><span class='top'><span class='math-sqrt-symbol'>√</span><span class='math-sqrt'>n</span> + 4</span><span class='bottom'>n<sup>2</sup></span></div>", type: "conv_only", answer: "converges" },
    "11.3-19": { text: "Determine whether the series is convergent or divergent.<br>∑<sub>n=1</sub><sup>∞</sup> <div class='math-frac'><span class='top'>1</span><span class='bottom'>n<sup>2</sup> + 4</span></div>", type: "conv_only", answer: "converges" },
    "11.3-21": { text: "Determine whether the series is convergent or divergent.<br>∑<sub>n=1</sub><sup>∞</sup> <div class='math-frac'><span class='top'>n<sup>3</sup></span><span class='bottom'>n<sup>4</sup> + 4</span></div>", type: "conv_only", answer: "diverges" },
    "11.3-23": { text: "Determine whether the series is convergent or divergent.<br>∑<sub>n=2</sub><sup>∞</sup> <div class='math-frac'><span class='top'>1</span><span class='bottom'>n ln n</span></div>", type: "conv_only", answer: "diverges" },
    "11.3-25": { text: "Determine whether the series is convergent or divergent.<br>∑<sub>k=1</sub><sup>∞</sup> k e<sup>-k</sup>", type: "conv_only", answer: "converges" },
    "11.3-27": { text: "Determine whether the series is convergent or divergent.<br>∑<sub>n=1</sub><sup>∞</sup> <div class='math-frac'><span class='top'>1</span><span class='bottom'>n<sup>2</sup> + n<sup>3</sup></span></div>", type: "conv_only", answer: "converges" },
    "11.3-31": { text: "Find the values of p for which the series is convergent.<br>∑<sub>n=2</sub><sup>∞</sup> <div class='math-frac'><span class='top'>1</span><span class='bottom'>n(ln n)<sup>p</sup></span></div>", answer: "p > 1" },
    "11.3-33": { text: "Find the values of p for which the series is convergent.<br>∑<sub>n=1</sub><sup>∞</sup> n(1 + n<sup>2</sup>)<sup>p</sup>", answer: "p < -1" },

    // CHAPTER 11.4
    "11.4-3": { 
        text: "Comparison Tests:<br><br>a. Use the Direct Comparison Test to show that the first series converges by comparing it to the second series.<br>∑<sub>n=2</sub><sup>∞</sup> <div class='math-frac'><span class='top'>n</span><span class='bottom'>n<sup>3</sup> + 5</span></div> , ∑<sub>n=2</sub><sup>∞</sup> <div class='math-frac'><span class='top'>1</span><span class='bottom'>n<sup>2</sup></span></div><br>b. Use the Limit Comparison Test to show that the first series converges by comparing it to the second series.<br>∑<sub>n=2</sub><sup>∞</sup> <div class='math-frac'><span class='top'>n</span><span class='bottom'>n<sup>3</sup> - 5</span></div> , ∑<sub>n=2</sub><sup>∞</sup> <div class='math-frac'><span class='top'>1</span><span class='bottom'>n<sup>2</sup></span></div>",
        parts: [
            { label: "Part a (Result)", type: "conv_only", answer: "converges" },
            { label: "Part b (Result)", type: "conv_only", answer: "converges" }
        ]
    },
    "11.4-5": { 
        text: "Which of the following inequalities can be used to show that ∑<sub>n=1</sub><sup>∞</sup> <div class='math-frac'><span class='top'>n</span><span class='bottom'>n<sup>3</sup> + 1</span></div> converges?<br><br>a. <div class='math-frac'><span class='top'>n</span><span class='bottom'>n<sup>3</sup> + 1</span></div> ≥ <div class='math-frac'><span class='top'>1</span><span class='bottom'>n<sup>3</sup> + 1</span></div><br>b. <div class='math-frac'><span class='top'>n</span><span class='bottom'>n<sup>3</sup> + 1</span></div> ≤ <div class='math-frac'><span class='top'>1</span><span class='bottom'>n</span></div><br>c. <div class='math-frac'><span class='top'>n</span><span class='bottom'>n<sup>3</sup> + 1</span></div> ≤ <div class='math-frac'><span class='top'>1</span><span class='bottom'>n<sup>2</sup></span></div>",
        parts: [
            { label: "Select correct option", type: "choice", options: ["a", "b", "c"], answer: "c" }
        ]
    },
    "11.4-7": { text: "Determine whether the series converges or diverges.<br>∑<sub>n=1</sub><sup>∞</sup> <div class='math-frac'><span class='top'>1</span><span class='bottom'>n<sup>3</sup> + 8</span></div>", type: "conv_only", answer: "converges" },
    "11.4-9": { text: "Determine whether the series converges or diverges.<br>∑<sub>n=1</sub><sup>∞</sup> <div class='math-frac'><span class='top'>n + 1</span><span class='bottom'>n<span class='math-sqrt-symbol'>√</span><span class='math-sqrt'>n</span></span></div>", type: "conv_only", answer: "diverges" },
    "11.4-10": { text: "Determine whether the series converges or diverges.<br>∑<sub>n=1</sub><sup>∞</sup> <div class='math-frac'><span class='top'>n - 1</span><span class='bottom'>n<sup>3</sup> + 1</span></div>", type: "conv_only", answer: "converges" },
    "11.4-11": { text: "Determine whether the series converges or diverges.<br>∑<sub>n=1</sub><sup>∞</sup> <div class='math-frac'><span class='top'>9<sup>n</sup></span><span class='bottom'>3 + 10<sup>n</sup></span></div>", type: "conv_only", answer: "converges" },
    "11.4-19": { text: "Determine whether the series converges or diverges.<br>∑<sub>n=1</sub><sup>∞</sup> <div class='math-frac'><span class='top'>4<sup>n+1</sup></span><span class='bottom'>3<sup>n</sup> - 2</span></div>", type: "conv_only", answer: "diverges" },
    "11.4-27": { text: "Determine whether the series converges or diverges.<br>∑<sub>n=1</sub><sup>∞</sup> <div class='math-frac'><span class='top'>5 + 2n</span><span class='bottom'>(1 + n<sup>2</sup>)<sup>2</sup></span></div>", type: "conv_only", answer: "converges" },

    // CHAPTER 11.5
    "11.5-3": { text: "Test the series for convergence or divergence.<br>- <div class='math-frac'><span class='top'>2</span><span class='bottom'>5</span></div> + <div class='math-frac'><span class='top'>4</span><span class='bottom'>6</span></div> - <div class='math-frac'><span class='top'>6</span><span class='bottom'>7</span></div> + <div class='math-frac'><span class='top'>8</span><span class='bottom'>8</span></div> - <div class='math-frac'><span class='top'>10</span><span class='bottom'>9</span></div> + ...", type: "conv_only", answer: "diverges" },
    "11.5-5": { text: "Test the series for convergence or divergence.<br>∑<sub>n=1</sub><sup>∞</sup> <div class='math-frac'><span class='top'>(-1)<sup>n-1</sup></span><span class='bottom'>3 + 5n</span></div>", type: "conv_only", answer: "converges" },
    "11.5-7": { text: "Test the series for convergence or divergence.<br>∑<sub>n=1</sub><sup>∞</sup> (-1)<sup>n</sup> <div class='math-frac'><span class='top'>3n - 1</span><span class='bottom'>2n + 1</span></div>", type: "conv_only", answer: "diverges" },
    "11.5-13": { text: "Test the series for convergence or divergence.<br>∑<sub>n=1</sub><sup>∞</sup> (-1)<sup>n-1</sup> e<sup>2/n</sup>", type: "conv_only", answer: "diverges" },
    "11.5-15": { text: "Test the series for convergence or divergence.<br>∑<sub>n=0</sub><sup>∞</sup> <div class='math-frac'><span class='top'>sin((n + 1/2)π)</span><span class='bottom'>1 + <span class='math-sqrt-symbol'>√</span><span class='math-sqrt'>n</span></span></div>", type: "conv_only", answer: "converges" },
    "11.5-23": { 
        text: "Determine whether the series is absolutely convergent, conditionally convergent, or divergent.<br>∑<sub>n=1</sub><sup>∞</sup> <div class='math-frac'><span class='top'>(-1)<sup>n-1</sup></span><span class='bottom'><sup>3</sup><span class='math-sqrt-symbol'>√</span><span class='math-sqrt'>n<sup>2</sup></span></span></div>", 
        parts: [{ type: "choice", options: ["absolutely convergent", "conditionally convergent", "divergent"], answer: "conditionally convergent" }]
    },
    "11.5-25": { 
        text: "Determine whether the series is absolutely convergent, conditionally convergent, or divergent.<br>∑<sub>n=1</sub><sup>∞</sup> <div class='math-frac'><span class='top'>(-1)<sup>n</sup></span><span class='bottom'>5n + 1</span></div>", 
        parts: [{ type: "choice", options: ["absolutely convergent", "conditionally convergent", "divergent"], answer: "conditionally convergent" }]
    },
    "11.5-27": { 
        text: "Determine whether the series is absolutely convergent, conditionally convergent, or divergent.<br>∑<sub>n=1</sub><sup>∞</sup> <div class='math-frac'><span class='top'>(-1)<sup>n</sup></span><span class='bottom'>n<sup>2</sup> + 1</span></div>", 
        parts: [{ type: "choice", options: ["absolutely convergent", "conditionally convergent", "divergent"], answer: "absolutely convergent" }]
    },
    "11.5-29": { 
        text: "Determine whether the series is absolutely convergent, conditionally convergent, or divergent.<br>∑<sub>n=1</sub><sup>∞</sup> <div class='math-frac'><span class='top'>1 + 2 sin n</span><span class='bottom'>n<sup>3</sup></span></div>", 
        parts: [{ type: "choice", options: ["absolutely convergent", "conditionally convergent", "divergent"], answer: "absolutely convergent" }]
    },

    // CHAPTER 11.6
    "11.6-3": { text: "Use the Ratio Test to determine whether the series is convergent or divergent.<br>∑<sub>n=1</sub><sup>∞</sup> <div class='math-frac'><span class='top'>n</span><span class='bottom'>5<sup>n</sup></span></div>", type: "conv_only", answer: "converges" },
    "11.6-5": { text: "Use the Ratio Test to determine whether the series is convergent or divergent.<br>∑<sub>n=1</sub><sup>∞</sup> (-1)<sup>n-1</sup> <div class='math-frac'><span class='top'>3<sup>n</sup></span><span class='bottom'>2<sup>n</sup> n<sup>3</sup></span></div>", type: "conv_only", answer: "diverges" },
    "11.6-7": { text: "Use the Ratio Test to determine whether the series is convergent or divergent.<br>∑<sub>k=1</sub><sup>∞</sup> <div class='math-frac'><span class='top'>1</span><span class='bottom'>k!</span></div>", type: "conv_only", answer: "converges" },
    "11.6-9": { text: "Use the Ratio Test to determine whether the series is convergent or divergent.<br>∑<sub>n=1</sub><sup>∞</sup> <div class='math-frac'><span class='top'>10<sup>n</sup></span><span class='bottom'>(n+1)4<sup>2n+1</sup></span></div>", type: "conv_only", answer: "converges" },
    "11.6-13": { 
        text: "Use the Ratio Test to determine whether the series is convergent or divergent.<br>∑<sub>n=1</sub><sup>∞</sup> <div class='math-frac'><span class='top'>cos(nπ/3)</span><span class='bottom'>n!</span></div>", 
        parts: [{ type: "choice", options: ["absolutely convergent", "conditionally convergent", "divergent"], answer: "absolutely convergent" }]
    },
    "11.6-21": { text: "Use the Root Test to determine whether the series is convergent or divergent.<br>∑<sub>n=1</sub><sup>∞</sup> ( <div class='math-frac'><span class='top'>n<sup>2</sup> + 1</span><span class='bottom'>2n<sup>2</sup> + 1</span></div> )<sup>n</sup>", type: "conv_only", answer: "converges" },
    "11.6-23": { 
        text: "Use the Root Test to determine whether the series is convergent or divergent.<br>∑<sub>n=2</sub><sup>∞</sup> <div class='math-frac'><span class='top'>(-1)<sup>n-1</sup></span><span class='bottom'>(ln n)<sup>n</sup></span></div>", 
        parts: [{ type: "choice", options: ["absolutely convergent", "conditionally convergent", "divergent"], answer: "absolutely convergent" }]
    },
    "11.6-29": { 
        text: "Use any test to determine whether the series is absolutely convergent, conditionally convergent, or divergent.<br>∑<sub>n=1</sub><sup>∞</sup> <div class='math-frac'><span class='top'>(-9)<sup>n</sup></span><span class='bottom'>n 10<sup>n+1</sup></span></div>", 
        parts: [{ type: "choice", options: ["absolutely convergent", "conditionally convergent", "divergent"], answer: "absolutely convergent" }]
    },
    "11.6-33": { 
        text: "Use any test to determine whether the series is absolutely convergent, conditionally convergent, or divergent.<br>∑<sub>n=1</sub><sup>∞</sup> <div class='math-frac'><span class='top'>(-1)<sup>n</sup> arctan n</span><span class='bottom'>n<sup>2</sup></span></div>", 
        parts: [{ type: "choice", options: ["absolutely convergent", "conditionally convergent", "divergent"], answer: "absolutely convergent" }]
    },
    "11.6-35": { text: "The terms of a series are defined recursively by the equations:<br>a<sub>1</sub> = 2, a<sub>n+1</sub> = <div class='math-frac'><span class='top'>5n + 1</span><span class='bottom'>4n + 3</span></div> a<sub>n</sub><br>Determine whether ∑ a<sub>n</sub> converges or diverges.", type: "conv_only", answer: "diverges" },

    // CHAPTER 11.7
    "11.7-1": { 
        text: "Two similar-looking series are given. Test each one for convergence or divergence.<br><br>a. ∑<sub>n=1</sub><sup>∞</sup> <div class='math-frac'><span class='top'>1</span><span class='bottom'>5<sup>n</sup></span></div><br>b. ∑<sub>n=1</sub><sup>∞</sup> <div class='math-frac'><span class='top'>1</span><span class='bottom'>5<sup>n</sup> + n</span></div>",
        parts: [
            { label: "Part a", type: "conv_only", answer: "converges" },
            { label: "Part b", type: "conv_only", answer: "converges" }
        ]
    },
    "11.7-3": { 
        text: "Two similar-looking series are given. Test each one for convergence or divergence.<br><br>a. ∑<sub>n=1</sub><sup>∞</sup> <div class='math-frac'><span class='top'>n</span><span class='bottom'>3<sup>n</sup></span></div><br>b. ∑<sub>n=1</sub><sup>∞</sup> <div class='math-frac'><span class='top'>3<sup>n</sup></span><span class='bottom'>n</span></div>",
        parts: [
            { label: "Part a", type: "conv_only", answer: "converges" },
            { label: "Part b", type: "conv_only", answer: "diverges" }
        ]
    },
    "11.7-5": { 
        text: "Two similar-looking series are given. Test each one for convergence or divergence.<br><br>a. ∑<sub>n=1</sub><sup>∞</sup> <div class='math-frac'><span class='top'>n</span><span class='bottom'>n<sup>2</sup> + 1</span></div><br>b. ∑<sub>n=1</sub><sup>∞</sup> ( <div class='math-frac'><span class='top'>n</span><span class='bottom'>n<sup>2</sup> + 1</span></div> )<sup>n</sup>",
        parts: [
            { label: "Part a", type: "conv_only", answer: "diverges" },
            { label: "Part b", type: "conv_only", answer: "converges" }
        ]
    },
    "11.7-11": { 
        text: "Test the series for convergence or divergence.<br>∑<sub>n=1</sub><sup>∞</sup> (-1)<sup>n</sup> <div class='math-frac'><span class='top'>n<sup>2</sup> - 1</span><span class='bottom'>n<sup>3</sup> + 1</span></div>", 
        parts: [{ type: "choice", options: ["absolutely convergent", "conditionally convergent", "divergent"], answer: "conditionally convergent" }]
    },
    "11.7-13": { text: "Test the series for convergence or divergence.<br>∑<sub>n=1</sub><sup>∞</sup> <div class='math-frac'><span class='top'>e<sup>n</sup></span><span class='bottom'>n<sup>2</sup></span></div>", type: "conv_only", answer: "diverges" },
    "11.7-17": { text: "Test the series for convergence or divergence.<br>∑<sub>n=0</sub><sup>∞</sup> (-1)<sup>n</sup> <div class='math-frac'><span class='top'>π<sup>2n</sup></span><span class='bottom'>(2n)!</span></div>", type: "conv_only", answer: "converges" },
    "11.7-23": { text: "Test the series for convergence or divergence.<br>∑<sub>k=1</sub><sup>∞</sup> <div class='math-frac'><span class='top'>2<sup>k-1</sup> 3<sup>k+1</sup></span><span class='bottom'>k<sup>k</sup></span></div>", type: "conv_only", answer: "converges" },
    "11.7-35": { text: "Test the series for convergence or divergence.<br>∑<sub>n=1</sub><sup>∞</sup> <div class='math-frac'><span class='top'>n!</span><span class='bottom'>e<sup>n<sup>2</sup></sup></span></div>", type: "conv_only", answer: "converges" },

    // CHAPTER 11.8
    "11.8-3": { 
        text: "Find the radius of convergence and interval of convergence of the power series.<br>∑<sub>n=1</sub><sup>∞</sup> <div class='math-frac'><span class='top'>x<sup>n</sup></span><span class='bottom'>n</span></div>",
        parts: [
            { label: "Radius of Convergence (R)", answer: "1" }, 
            { label: "Interval of Convergence (I)", answer: "[-1, 1)" }
        ]
    },
    "11.8-5": { 
        text: "Find the radius of convergence and interval of convergence of the power series.<br>∑<sub>n=1</sub><sup>∞</sup> (-1)<sup>n</sup> n x<sup>n</sup>",
        parts: [
            { label: "Radius of Convergence (R)", answer: "1" }, 
            { label: "Interval of Convergence (I)", answer: "(-1, 1)" }
        ]
    },
    "11.8-7": { 
        text: "Find the radius of convergence and interval of convergence of the power series.<br>∑<sub>n=1</sub><sup>∞</sup> <span class='math-sqrt-symbol'>√</span><span class='math-sqrt'>n</span> x<sup>n</sup>",
        parts: [
            { label: "Radius of Convergence (R)", answer: "1" }, 
            { label: "Interval of Convergence (I)", answer: "(-1, 1)" }
        ]
    },
    "11.8-11": { 
        text: "Find the radius of convergence and interval of convergence of the power series.<br>∑<sub>n=1</sub><sup>∞</sup> <div class='math-frac'><span class='top'>x<sup>n</sup></span><span class='bottom'>2n - 1</span></div>",
        parts: [
            { label: "Radius of Convergence (R)", answer: "1" }, 
            { label: "Interval of Convergence (I)", answer: "[-1, 1)" }
        ]
    },
    "11.8-13": { 
        text: "Find the radius of convergence and interval of convergence of the power series.<br>∑<sub>n=0</sub><sup>∞</sup> <div class='math-frac'><span class='top'>x<sup>n</sup></span><span class='bottom'>n!</span></div>",
        parts: [
            { label: "Radius of Convergence (R)", answer: "∞" }, 
            { label: "Interval of Convergence (I)", answer: "(-∞, ∞)" }
        ]
    },
    "11.8-19": { 
        text: "Find the radius of convergence and interval of convergence of the power series.<br>∑<sub>n=1</sub><sup>∞</sup> <div class='math-frac'><span class='top'>n</span><span class='bottom'>2<sup>n</sup>(n<sup>2</sup> + 1)</span></div> x<sup>n</sup>",
        parts: [
            { label: "Radius of Convergence (R)", answer: "2" }, 
            { label: "Interval of Convergence (I)", answer: "[-2, 2)" }
        ]
    },
    "11.8-23": { 
        text: "Find the radius of convergence and interval of convergence of the power series.<br>∑<sub>n=2</sub><sup>∞</sup> <div class='math-frac'><span class='top'>(x + 2)<sup>n</sup></span><span class='bottom'>2<sup>n</sup> ln n</span></div>",
        parts: [
            { label: "Radius of Convergence (R)", answer: "2" }, 
            { label: "Interval of Convergence (I)", answer: "[-4, 0)" }
        ]
    },
    "11.8-35": { 
        text: "Find the radius of convergence and interval of convergence of the power series.<br>∑<sub>n=1</sub><sup>∞</sup> <div class='math-frac'><span class='top'>x<sup>n</sup></span><span class='bottom'>1 · 3 · 5 · ... · (2n - 1)</span></div>",
        parts: [
            { label: "Radius of Convergence (R)", answer: "∞" }, 
            { label: "Interval of Convergence (I)", answer: "(-∞, ∞)" }
        ]
    },

    // CHAPTER 11.9
    "11.9-7": { 
        text: "Find a power series representation for the function f(x) = <div class='math-frac'><span class='top'>2</span><span class='bottom'>3 - x</span></div> and determine the interval of convergence.",
        parts: [
            { label: "Power Series Representation", answer: "∑_{n=0}^∞ (2x^n)/(3^{n+1})" },
            { label: "Interval of Convergence (I)", answer: "(-3, 3)" }
        ]
    },
    "11.9-9": { 
        text: "Find a power series representation for the function f(x) = <div class='math-frac'><span class='top'>x<sup>2</sup></span><span class='bottom'>x<sup>4</sup> + 16</span></div> and determine the interval of convergence.",
        parts: [
            { label: "Power Series Representation", answer: "∑_{n=0}^∞ ((-1)^n x^{4n+2})/(16^{n+1})" },
            { label: "Interval of Convergence (I)", answer: "(-2, 2)" }
        ]
    },
    "11.9-13": { 
        text: "Express the function f(x) = <div class='math-frac'><span class='top'>2x - 4</span><span class='bottom'>x<sup>2</sup> - 4x + 3</span></div> as the sum of a power series by first using partial fractions. Find the interval of convergence.",
        parts: [
            { label: "Power Series Representation", answer: "-∑_{n=0}^∞ (1 + 1/3^{n+1})x^n" },
            { label: "Interval of Convergence (I)", answer: "(-1, 1)" }
        ]
    },
    "11.9-15": { 
        text: "Power Series via Differentiation:<br><br>a. Use differentiation to find a power series representation for f(x) = <div class='math-frac'><span class='top'>1</span><span class='bottom'>(1 + x)<sup>2</sup></span></div>. What is the radius of convergence?<br>b. Use part (a) to find a power series for f(x) = <div class='math-frac'><span class='top'>1</span><span class='bottom'>(1 + x)<sup>3</sup></span></div>.<br>c. Use part (b) to find a power series for f(x) = <div class='math-frac'><span class='top'>x<sup>2</sup></span><span class='bottom'>(1 + x)<sup>3</sup></span></div>.",
        parts: [
            { label: "Part a (Series)", answer: "∑_{n=0}^∞ (-1)^n (n+1)x^n" },
            { label: "Part a (Radius R)", answer: "1" },
            { label: "Part b (Series)", answer: "1/2 ∑_{n=0}^∞ (-1)^n (n+1)(n+2)x^n" },
            { label: "Part c (Series)", answer: "1/2 ∑_{n=2}^∞ (-1)^n (n-1)nx^n" }
        ]
    },
    "11.9-17": { 
        text: "Find a power series representation for the function f(x) = <div class='math-frac'><span class='top'>x</span><span class='bottom'>(1 + 4x)<sup>2</sup></span></div> and determine the radius of convergence.",
        parts: [
            { label: "Power Series Representation", answer: "∑_{n=1}^∞ (-1)^{n-1} n 4^{n-1} x^n" },
            { label: "Radius of Convergence (R)", answer: "1/4" }
        ]
    },
    "11.9-27": { 
        text: "Evaluate the indefinite integral ∫ <div class='math-frac'><span class='top'>t</span><span class='bottom'>1 - t<sup>8</sup></span></div> dt as a power series. What is the radius of convergence?",
        parts: [
            { label: "Indefinite Integral (Series)", answer: "1/2 ∑_{n=0}^∞ (t^{8n+2})/(4n+1) + C" },
            { label: "Radius of Convergence (R)", answer: "1" }
        ]
    },

    // CHAPTER 11.10
    "11.10-1": { 
        text: "If f(x) = ∑<sub>n=0</sub><sup>∞</sup> b<sub>n</sub>(x - 5)<sup>n</sup> for all x, write a formula for b<sub>8</sub>.",
        parts: [{ label: "b_8 Formula", answer: "f^{(8)}(5)/8!" }]
    },
    "11.10-3": { 
        text: "If f<sup>(n)</sup>(0) = (n+1)! for n = 0, 1, 2, ..., find the Maclaurin series for f and its radius of convergence.",
        parts: [
            { label: "Maclaurin Series", answer: "∑_{n=0}^∞ (n+1)x^n" },
            { label: "Radius of Convergence (R)", answer: "1" }
        ]
    },
    "11.10-5": { 
        text: "Use the definition of a Taylor series to find the first four nonzero terms of the series for f(x) = xe<sup>x</sup> centered at a = 0.",
        parts: [{ label: "First 4 terms", answer: "x + x^2 + x^3/2! + x^4/3! + ..." }]
    },
    "11.10-7": { 
        text: "Use the definition of a Taylor series to find the first four nonzero terms of the series for f(x) = <sup>3</sup><span class='math-sqrt-symbol'>√</span><span class='math-sqrt'>x</span> centered at a = 8.",
        parts: [{ label: "First 4 terms", answer: "2 + 1/12 (x-8) - 1/288 (x-8)^2 + 5/20736 (x-8)^3 + ..." }]
    },
    "11.10-9": { 
        text: "Use the definition of a Taylor series to find the first four nonzero terms of the series for f(x) = sin x centered at a = π/6.",
        parts: [{ label: "First 4 terms", answer: "1/2 + √3/2 (x-π/6) - 1/4 (x-π/6)^2 - √3/12 (x-π/6)^3 + ..." }]
    },
    "11.10-11": { 
        text: "Find the Maclaurin series for f(x) = (1 - x)<sup>-2</sup> using the definition of a Maclaurin series. Also find the associated radius of convergence.",
        parts: [
            { label: "Maclaurin Series", answer: "∑_{n=0}^∞ (n+1)x^n" },
            { label: "Radius of Convergence (R)", answer: "1" }
        ]
    },
    "11.10-17": { 
        text: "Find the Maclaurin series for f(x) = 2<sup>x</sup> using the definition of a Maclaurin series. Also find the associated radius of convergence.",
        parts: [
            { label: "Maclaurin Series", answer: "∑_{n=0}^∞ (ln 2)^n/n! x^n" },
            { label: "Radius of Convergence (R)", answer: "∞" }
        ]
    },
    "11.10-21": { 
        text: "Find the Taylor series for f(x) = x<sup>5</sup> + 2x<sup>3</sup> + x centered at a = 2. Also find the associated radius of convergence.",
        parts: [
            { label: "Taylor Series", answer: "50 + 121(x-2) + 118(x-2)^2 + 58(x-2)^3 + 15(x-2)^4 + (x-2)^5" },
            { label: "Radius of Convergence (R)", answer: "∞" }
        ]
    },
    "11.10-23": { 
        text: "Find the Taylor series for f(x) = ln x centered at a = 2. Also find the associated radius of convergence.",
        parts: [
            { label: "Taylor Series", answer: "ln 2 + ∑_{n=1}^∞ (-1)^{n-1}/(n 2^n) (x-2)^n" },
            { label: "Radius of Convergence (R)", answer: "2" }
        ]
    },
    "11.10-27": { 
        text: "Find the Taylor series for f(x) = sin x centered at a = π. Also find the associated radius of convergence.",
        parts: [
            { label: "Taylor Series", answer: "-(x-π) + (x-π)^3/3! - (x-π)^5/5! + ..." },
            { label: "Radius of Convergence (R)", answer: "∞" }
        ]
    },
    "11.10-35": { 
        text: "Use the binomial series to expand <sup>4</sup><span class='math-sqrt-symbol'>√</span><span class='math-sqrt'>1 - x</span> as a power series. State the radius of convergence.",
        parts: [
            { label: "Power Series", answer: "1 - 1/4 x - 3/32 x^2 - 7/128 x^3 - ..." },
            { label: "Radius of Convergence (R)", answer: "1" }
        ]
    },
    "11.10-37": { 
        text: "Use the binomial series to expand <div class='math-frac'><span class='top'>1</span><span class='bottom'>(2 + x)<sup>3</sup></span></div> as a power series. State the radius of convergence.",
        parts: [
            { label: "Power Series", answer: "1/8 ∑_{n=0}^∞ (-1)^n (n+1)(n+2)/2 (x/2)^n" },
            { label: "Radius of Convergence (R)", answer: "2" }
        ]
    },
    "11.10-39": { 
        text: "Use a Maclaurin series in Table 1 to obtain the Maclaurin series for f(x) = arctan(x<sup>2</sup>).",
        parts: [{ label: "Maclaurin Series", answer: "∑_{n=0}^∞ (-1)^n x^{4n+2} / (2n+1)" }]
    },
    "11.10-43": { 
        text: "Use a Maclaurin series in Table 1 to obtain the Maclaurin series for f(x) = x cos(<div class='math-frac'><span class='top'>1</span><span class='bottom'>2</span></div> x<sup>2</sup>).",
        parts: [{ label: "Maclaurin Series", answer: "∑_{n=0}^∞ (-1)^n x^{4n+1} / (2^{2n} (2n)!)" }]
    },
    "11.10-49": { 
        text: "Use the definitions sinh x = (e<sup>x</sup> - e<sup>-x</sup>)/2 and cosh x = (e<sup>x</sup> + e<sup>-x</sup>)/2 to show:<br><br>a. sinh x = ∑<sub>n=0</sub><sup>∞</sup> <div class='math-frac'><span class='top'>x<sup>2n+1</sup></span><span class='bottom'>(2n+1)!</span></div><br>b. cosh x = ∑<sub>n=0</sub><sup>∞</sup> <div class='math-frac'><span class='top'>x<sup>2n</sup></span><span class='bottom'>(2n)!</span></div>",
        parts: [
            { label: "Part a (Result)", type: "conv_only", answer: "converges" },
            { label: "Part b (Result)", type: "conv_only", answer: "converges" }
        ]
    },
    "11.10-55": { 
        text: "Use the Maclaurin series for cos x to compute cos 5° correct to five decimal places.",
        parts: [{ label: "Value", answer: "0.99619" }]
    },
    "11.10-79": { 
        text: "Find the function represented by the power series ∑<sub>n=0</sub><sup>∞</sup> <div class='math-frac'><span class='top'>(-1)<sup>n</sup> x<sup>4n</sup></span><span class='bottom'>n!</span></div>",
        parts: [{ label: "Function f(x)", answer: "e^{-x^4}" }]
    },
    "11.10-81": { 
        text: "Find the function represented by the power series ∑<sub>n=0</sub><sup>∞</sup> <div class='math-frac'><span class='top'>(-1)<sup>n</sup> x<sup>2n+1</sup></span><span class='bottom'>2<sup>2n+1</sup> (2n+1)</span></div>",
        parts: [{ label: "Function f(x)", answer: "arctan(x/2)" }]
    },
    "11.10-83": { 
        text: "Find the sum of the series ∑<sub>n=0</sub><sup>∞</sup> <div class='math-frac'><span class='top'>(-1)<sup>n</sup></span><span class='bottom'>n!</span></div>",
        parts: [{ label: "Sum", answer: "1/e" }]
    },
    "11.10-85": { 
        text: "Find the sum of the series ∑<sub>n=1</sub><sup>∞</sup> <div class='math-frac'><span class='top'>(-1)<sup>n-1</sup> 3<sup>n</sup></span><span class='bottom'>n 5<sup>n</sup></span></div>",
        parts: [{ label: "Sum", answer: "ln(8/5)" }]
    },

    // CHAPTER 11.11
    "11.11-1": { 
        text: "Determine whether a<sub>n</sub> = <div class='math-frac'><span class='top'>2 + n<sup>3</sup></span><span class='bottom'>1 + 2n<sup>3</sup></span></div> is convergent or divergent. If convergent, find limit.",
        type: "limit", answer: "1/2"
    },
    "11.11-3": { 
        text: "Determine whether a<sub>n</sub> = <div class='math-frac'><span class='top'>n<sup>3</sup></span><span class='bottom'>1 + n<sup>2</sup></span></div> is convergent or divergent. If convergent, find limit.",
        type: "limit", answer: "diverges"
    },
    "11.11-5": { 
        text: "Determine whether a<sub>n</sub> = <div class='math-frac'><span class='top'>n sin n</span><span class='bottom'>n<sup>2</sup> + 1</span></div> is convergent or divergent. If convergent, find limit.",
        type: "limit", answer: "0"
    },
    "11.11-7": { 
        text: "Determine whether (1 + <div class='math-frac'><span class='top'>3</span><span class='bottom'>n</span></div>)<sup>4n</sup> is convergent or divergent. If convergent, find limit.",
        type: "limit", answer: "e^{12}"
    },
    "11.11-9": { 
        text: "A sequence is defined recursively by a<sub>1</sub> = 1, a<sub>n+1</sub> = <div class='math-frac'><span class='top'>1</span><span class='bottom'>3</span></div> (a<sub>n</sub> + 4). Show that a<sub>n</sub> is increasing and a<sub>n</sub> < 2 for all n. Deduce that a<sub>n</sub> is convergent and find the limit.",
        parts: [
            { label: "Is increasing? (Type 'yes' or 'no')", answer: "yes" },
            { label: "Limit", answer: "2" }
        ]
    },
    "11.11-13": { text: "Determine whether ∑<sub>n=1</sub><sup>∞</sup> <div class='math-frac'><span class='top'>n<sup>3</sup></span><span class='bottom'>5<sup>n</sup></span></div> is convergent or divergent.", type: "conv_only", answer: "converges" },
    "11.11-15": { text: "Determine whether ∑<sub>n=2</sub><sup>∞</sup> <div class='math-frac'><span class='top'>1</span><span class='bottom'>n ln n</span></div> is convergent or divergent.", type: "conv_only", answer: "diverges" },
    "11.11-21": { 
        text: "Determine whether ∑<sub>n=1</sub><sup>∞</sup> (-1)<sup>n-1</sup> <span class='math-sqrt-symbol'>√</span><span class='math-sqrt'><div class='math-frac'><span class='top'>n</span><span class='bottom'>n + 1</span></div></span> is absolutely convergent, conditionally convergent, or divergent.",
        parts: [{ type: "choice", options: ["absolutely convergent", "conditionally convergent", "divergent"], answer: "conditionally convergent" }]
    },
    "11.11-23": { 
        text: "Determine whether ∑<sub>n=1</sub><sup>∞</sup> (-1)<sup>n-1</sup> n<sup>-1/3</sup> is absolutely convergent, conditionally convergent, or divergent.",
        parts: [{ type: "choice", options: ["absolutely convergent", "conditionally convergent", "divergent"], answer: "conditionally convergent" }]
    },
    "11.11-27": { 
        text: "Find the sum of the series ∑<sub>n=1</sub><sup>∞</sup> <div class='math-frac'><span class='top'>(-3)<sup>n-1</sup></span><span class='bottom'>2<sup>3n</sup></span></div>",
        parts: [{ label: "Sum", answer: "1/11" }]
    },
    "11.11-33": { 
        text: "Show that cosh x ≥ 1 + <div class='math-frac'><span class='top'>1</span><span class='bottom'>2</span></div> x<sup>2</sup> for all x.",
        parts: [{ label: "Successful proof? (Type 'yes')", answer: "yes" }]
    },
    "11.11-37": { 
        text: "Use the sum of the first eight terms to approximate the sum of the series ∑<sub>n=1</sub><sup>∞</sup> (2 + 5<sup>n</sup>)<sup>-1</sup>. Estimate the error involved.",
        parts: [
            { label: "Approximate Sum (s_8)", answer: "0.189762" },
            { label: "Estimated Error", answer: "10^{-6}" }
        ]
    }
};

// --- END CONFIGURATION ---

const urlParams = new URLSearchParams(window.location.search);
let currentCh = urlParams.get('ch') || "6.1"; 
let currentQ = urlParams.get('q') || ""; 
let lastFocusedInput = null;

function isRestricted(ch) {
    return !ch.startsWith("11.");
}

document.addEventListener('DOMContentLoaded', () => {
    const page = window.location.pathname.split("/").pop();
    if (page === 'index.html' || page === '') {
        generateChapterGrid();
    } else if (page === 'chapter.html') {
        generateQuestionGrid();
    } else if (page === 'question.html') {
        if (!currentQ && assignedQuestions[currentCh]) {
            currentQ = assignedQuestions[currentCh][0].toString();
        }
        updateUI();
        generateSidebar();
        document.getElementById('backToChapterBtn').onclick = () => {
            window.location.href = `chapter.html?ch=${currentCh}`;
        };
    }
});

function generateChapterGrid() {
    const grid = document.getElementById('chapterGrid');
    if (!grid) return;
    assignedChapters.forEach(ch => {
        const btn = document.createElement('button');
        btn.className = 'chapter-btn';
        if (isRestricted(ch)) {
            btn.style.opacity = "0.6";
            btn.style.filter = "grayscale(1)";
        }
        btn.innerText = `Chapter ${ch}`;
        btn.onclick = () => window.location.href = `chapter.html?ch=${ch}`;
        grid.appendChild(btn);
    });
}

function generateQuestionGrid() {
    const grid = document.getElementById('questionGrid');
    const rs = document.querySelector('.resources-section');
    const rg = document.querySelector('.resource-grid');
    if (!grid) return;

    if (isRestricted(currentCh)) {
        grid.innerHTML = `<div style="text-align: center; padding: 50px; border: 2px dashed #ccc; width: 100%;"><h2>Focus on Midterm 2</h2><p>Only Chapter 11 materials are active.</p><button onclick="window.location.href='index.html'">Return</button></div>`;
        if (rs) rs.style.display = 'none';
        if (rg) rg.style.display = 'none';
        return;
    }

    document.getElementById('chapterTitle').innerText = `Chapter ${currentCh} Questions`;
    (assignedQuestions[currentCh] || []).forEach(q => {
        const btn = document.createElement('button');
        btn.className = 'question-btn';
        btn.innerText = `Question ${q}`;
        btn.onclick = () => window.location.href = `question.html?ch=${currentCh}&q=${q}`;
        grid.appendChild(btn);
    });
}

function updateUI() {
    const sidebar = document.getElementById('sidebar');
    if (isRestricted(currentCh)) {
        document.querySelector('.content').innerHTML = `<div style="text-align: center; padding: 50px;"><h2>Restricted</h2><button onclick="window.location.href='index.html'">Return</button></div>`;
        return;
    }
    if (sidebar) sidebar.style.display = 'block';

    document.getElementById('questionTitle').innerText = `Question ${currentQ}`;
    const key = `${currentCh}-${currentQ}`;
    const qInfo = questionData[key];
    const qBox = document.getElementById('questionContent');
    const inputsArea = document.getElementById('inputsArea');

    qBox.innerHTML = qInfo?.text || "[Question content placeholder]";
    inputsArea.innerHTML = "";

    const parts = qInfo?.parts || [{ label: "", type: qInfo?.type, answer: qInfo?.answer }];
    
    parts.forEach((p, index) => {
        const wrapper = document.createElement('div');
        wrapper.style.marginBottom = "20px";
        wrapper.style.width = "100%";

        if (p.label) {
            const label = document.createElement('div');
            label.innerHTML = `<strong>${p.label}:</strong>`;
            label.style.marginBottom = "10px";
            wrapper.appendChild(label);
        }

        if (p.type === "limit" || p.type === "conv_only" || p.type === "choice") {
            const sel = document.createElement('div');
            sel.className = "choice-container";
            let options = ["converges", "diverges"];
            if (p.type === "choice" && p.options) options = p.options;

            sel.innerHTML = options.map(opt => `
                <label style="cursor:pointer; display:inline-block; padding: 5px 10px; border: 1px solid #ccc; border-radius: 4px; margin-right: 10px; background: #fff;">
                    <input type="radio" name="choice_${index}" value="${opt}" ${options.indexOf(opt) === 0 ? 'checked' : ''}> ${opt.charAt(0).toUpperCase() + opt.slice(1)}
                </label>
            `).join('');
            sel.style.marginBottom = "10px";
            wrapper.appendChild(sel);
        }

        if (p.type !== "conv_only" && p.type !== "choice") {
            const input = document.createElement('input');
            input.type = "text";
            input.className = "answer-input";
            input.dataset.index = index;
            input.placeholder = p.type === "limit" ? "Enter limit if converges" : "Enter answer";
            input.onfocus = () => { lastFocusedInput = input; };
            wrapper.appendChild(input);
            if (index === 0) lastFocusedInput = input;
        } else {
            const hiddenInput = document.createElement('input');
            hiddenInput.type = "hidden";
            hiddenInput.className = "answer-input";
            wrapper.appendChild(hiddenInput);
        }
        inputsArea.appendChild(wrapper);
    });

    const solImg = document.getElementById('solImg');
    solImg.src = qInfo?.solutionImg || `https://via.placeholder.com/600x400?text=Solution+Ch${currentCh}+Q${currentQ}`;

    const questions = (assignedQuestions[currentCh] || []).map(q => q.toString());
    const idx = questions.indexOf(currentQ.toString());
    document.getElementById('prevBtn').style.visibility = idx <= 0 ? 'hidden' : 'visible';
    document.getElementById('nextBtn').style.visibility = (idx === -1 || idx === questions.length - 1) ? 'hidden' : 'visible';
}

function generateSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (!sidebar) return;
    sidebar.innerHTML = '<h3>Questions</h3>';
    const completed = JSON.parse(localStorage.getItem('completed_questions') || "[]");
    (assignedQuestions[currentCh] || []).forEach(q => {
        const item = document.createElement('div');
        item.className = `sidebar-item ${q.toString() === currentQ.toString() ? 'active' : ''}`;
        item.innerHTML = `Question ${q} ${completed.includes(`${currentCh}-${q}`) ? '<span class="tick">✓</span>' : ''}`;
        item.onclick = () => { window.location.href = `question.html?ch=${currentCh}&q=${q}`; };
        sidebar.appendChild(item);
    });
}

function showInteraction() {
    document.getElementById('tryItZone').classList.remove('hidden');
    document.getElementById('initialButtons').classList.add('hidden');
}

function checkAnswer() {
    const key = `${currentCh}-${currentQ}`;
    const qInfo = questionData[key];
    if (!qInfo) return;

    const parts = qInfo.parts || [{ label: "", type: qInfo.type, answer: qInfo.answer }];
    const normalize = (str) => (str || "").toLowerCase()
        .replace(/\s+/g, '') 
        .replace(/[\{\[]/g, '(') // Convert { and [ to (
        .replace(/[\}\]]/g, ')') // Convert } and ] to )
        .replace(/,+/g, ',')
        .replace(/^,|,$/g, '')
        .replace(/infinity/g, '∞');

    let allCorrect = true;
    const inputs = document.querySelectorAll('.answer-input');

    parts.forEach((p, index) => {
        const userVal = inputs[index].value.trim();
        const normUser = normalize(userVal);
        const normTarget = normalize(p.answer);
        
        let partCorrect = false;
        if (p.type === "limit" || p.type === "conv_only" || p.type === "choice") {
            const status = document.querySelector(`input[name="choice_${index}"]:checked`).value;
            if (p.type === "conv_only" || p.type === "choice") {
                partCorrect = (status === p.answer);
            } else {
                partCorrect = (p.answer === "diverges") ? (status === "diverges") : (status === "converges" && normUser === normTarget);
            }
        } else {
            partCorrect = (normUser === normTarget);
        }
        if (!partCorrect) allCorrect = false;
    });

    const feedback = document.getElementById('feedback');
    feedback.classList.remove('hidden');
    if (allCorrect) {
        feedback.innerHTML = `<p class="success-text">Correct!</p>`;
        saveProgress(key);
        generateSidebar();
        showSolution(true);
    } else {
        feedback.innerHTML = `<p class="error-text">Incorrect. Check your formatting or try again.</p><button onclick="showSolution()">See Solution</button>`;
    }
}

function saveProgress(key) {
    let completed = JSON.parse(localStorage.getItem('completed_questions') || "[]");
    if (!completed.includes(key)) {
        completed.push(key);
        localStorage.setItem('completed_questions', JSON.stringify(completed));
    }
}

function showSolution(isCorrect = false) {
    document.getElementById('tryItZone').classList.add('hidden');
    document.getElementById('initialButtons').classList.add('hidden');
    document.getElementById('solutionZone').classList.remove('hidden');
    document.getElementById('solutionStatus').innerHTML = isCorrect ? `<h3 class="success-text">Correct!</h3>` : `<h3>Solution:</h3>`;
}

function insertSymbol(sym) {
    const input = lastFocusedInput || document.querySelector('.answer-input');
    if (!input || input.type === 'hidden') return;
    const start = input.selectionStart, end = input.selectionEnd, text = input.value;
    let ins = sym, off = sym.length;
    if (sym === 'fraction') { ins = "([ ])/([ ])"; off = 2; }
    else if (sym === 'power') { ins = "[ ]^[ ]"; off = 1; }
    else if (sym === 'sum') { ins = "∑_{n=[ ]}^{[ ]}"; off = 5; }
    else if (sym === 'root') { ins = "^{ [ ] }√{ [ ] }"; off = 3; }
    input.value = text.substring(0, start) + ins + text.substring(end);
    input.focus();
    input.setSelectionRange(start + off, start + off);
}

function changeQuestion(delta) {
    const questions = (assignedQuestions[currentCh] || []).map(q => q.toString());
    const idx = questions.indexOf(currentQ.toString());
    const nextQ = questions[idx + delta];
    if (nextQ) window.location.href = `question.html?ch=${currentCh}&q=${nextQ}`;
}
