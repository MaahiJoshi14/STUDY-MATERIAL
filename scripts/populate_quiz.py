import json
import os

quiz_path = r"C:\Users\Admin\study-material\src\data\quizData.json"

with open(quiz_path, 'r', encoding='utf-8') as f:
    data = json.load(f)

existing_subjects = {s["subjectId"] for s in data}

new_subjects = [
    {
        "subjectId": "basic-electrical",
        "subjectName": "Basic Electrical Engineering",
        "cycleOrBranch": "Physics Cycle",
        "totalQuestions": 12,
        "mostAskedCount": 5,
        "moderatelyAskedCount": 4,
        "canBeAskedCount": 3,
        "questions": [
            {
                "id": "bee-001", "subjectId": "basic-electrical", "subjectName": "Basic Electrical Engineering", "cycleOrBranch": "Physics Cycle",
                "type": "theory", "question": "State and explain Kirchhoff's Voltage Law (KVL) and Kirchhoff's Current Law (KCL).",
                "text": "State and explain Kirchhoff's Voltage Law (KVL) and Kirchhoff's Current Law (KCL).",
                "marks": 5, "keywords": ["voltage", "current", "sum", "zero", "node", "loop", "conservation", "energy", "charge"],
                "topic": "DC Circuits", "frequencyAsked": 5, "yearsAppeared": ["2022","2023","2024","2025"],
                "category": "most-asked", "difficulty": "easy"
            },
            {
                "id": "bee-002", "subjectId": "basic-electrical", "subjectName": "Basic Electrical Engineering", "cycleOrBranch": "Physics Cycle",
                "type": "numerical", "question": "Find the equivalent resistance between terminals A and B for a given bridge circuit.",
                "text": "Find the equivalent resistance between terminals A and B for a given bridge circuit.",
                "marks": 5, "keywords": ["equivalent", "resistance", "bridge", "star", "delta", "series", "parallel"],
                "formula": "Req = (R1*R2)/(R1+R2)",
                "topic": "DC Circuits", "frequencyAsked": 4, "yearsAppeared": ["2023","2024","2025"],
                "category": "most-asked", "difficulty": "medium"
            },
            {
                "id": "bee-003", "subjectId": "basic-electrical", "subjectName": "Basic Electrical Engineering", "cycleOrBranch": "Physics Cycle",
                "type": "theory", "question": "Explain the working principle of a single-phase transformer with a neat diagram.",
                "text": "Explain the working principle of a single-phase transformer with a neat diagram.",
                "marks": 6, "keywords": ["transformer", "faraday", "induction", "mutual", "primary", "secondary", "flux", "core"],
                "topic": "Transformers", "frequencyAsked": 5, "yearsAppeared": ["2022","2023","2024"],
                "category": "most-asked", "difficulty": "medium"
            },
            {
                "id": "bee-004", "subjectId": "basic-electrical", "subjectName": "Basic Electrical Engineering", "cycleOrBranch": "Physics Cycle",
                "type": "theory", "question": "Derive the EMF equation of a DC generator.",
                "text": "Derive the EMF equation of a DC generator.",
                "marks": 5, "keywords": ["emf", "equation", "generator", "flux", "poles", "conductors", "speed"],
                "topic": "DC Machines", "frequencyAsked": 4, "yearsAppeared": ["2022","2024","2025"],
                "category": "most-asked", "difficulty": "medium"
            },
            {
                "id": "bee-005", "subjectId": "basic-electrical", "subjectName": "Basic Electrical Engineering", "cycleOrBranch": "Physics Cycle",
                "type": "theory", "question": "What is power factor? Why is low power factor undesirable?",
                "text": "What is power factor? Why is low power factor undesirable?",
                "marks": 4, "keywords": ["power", "factor", "cosine", "angle", "current", "voltage", "losses", "efficiency"],
                "topic": "AC Circuits", "frequencyAsked": 3, "yearsAppeared": ["2023","2025"],
                "category": "most-asked", "difficulty": "easy"
            },
            {
                "id": "bee-006", "subjectId": "basic-electrical", "subjectName": "Basic Electrical Engineering", "cycleOrBranch": "Physics Cycle",
                "type": "numerical", "question": "An alternating voltage is given by v = 141.4 sin(314t). Find RMS value, frequency, and time period.",
                "text": "An alternating voltage is given by v = 141.4 sin(314t). Find RMS value, frequency, and time period.",
                "marks": 4, "keywords": ["rms", "frequency", "time", "period", "peak", "voltage"],
                "formula": "Vrms = Vm/√2 = 141.4/1.414 = 100V. f = 314/2π = 50Hz. T = 1/f = 0.02s",
                "topic": "AC Circuits", "frequencyAsked": 3, "yearsAppeared": ["2022","2024"],
                "category": "moderately-asked", "difficulty": "easy"
            },
            {
                "id": "bee-007", "subjectId": "basic-electrical", "subjectName": "Basic Electrical Engineering", "cycleOrBranch": "Physics Cycle",
                "type": "theory", "question": "State and prove Maximum Power Transfer Theorem.",
                "text": "State and prove Maximum Power Transfer Theorem.",
                "marks": 5, "keywords": ["maximum", "power", "transfer", "theorem", "load", "resistance", "internal", "source"],
                "topic": "Network Theorems", "frequencyAsked": 2, "yearsAppeared": ["2023"],
                "category": "moderately-asked", "difficulty": "medium"
            },
            {
                "id": "bee-008", "subjectId": "basic-electrical", "subjectName": "Basic Electrical Engineering", "cycleOrBranch": "Physics Cycle",
                "type": "theory", "question": "Explain the concept of three-phase AC systems. Advantages over single-phase?",
                "text": "Explain the concept of three-phase AC systems. Advantages over single-phase?",
                "marks": 5, "keywords": ["three", "phase", "advantages", "constant", "power", "efficiency", "conductor", "copper"],
                "topic": "Three Phase Circuits", "frequencyAsked": 2, "yearsAppeared": ["2024"],
                "category": "moderately-asked", "difficulty": "medium"
            },
            {
                "id": "bee-009", "subjectId": "basic-electrical", "subjectName": "Basic Electrical Engineering", "cycleOrBranch": "Physics Cycle",
                "type": "numerical", "question": "A 25kVA, 2200/220V transformer has primary and secondary turns of 1000 and 100. Find full load primary and secondary currents.",
                "text": "A 25kVA, 2200/220V transformer has primary and secondary turns of 1000 and 100. Find full load primary and secondary currents.",
                "marks": 4, "keywords": ["transformer", "kva", "current", "primary", "secondary", "turns", "ratio"],
                "formula": "I1 = 25000/2200 = 11.36A. I2 = 25000/220 = 113.6A",
                "topic": "Transformers", "frequencyAsked": 2, "yearsAppeared": ["2025"],
                "category": "moderately-asked", "difficulty": "easy"
            },
            {
                "id": "bee-010", "subjectId": "basic-electrical", "subjectName": "Basic Electrical Engineering", "cycleOrBranch": "Physics Cycle",
                "type": "theory", "question": "Explain the construction of a 3-phase induction motor.",
                "text": "Explain the construction of a 3-phase induction motor.",
                "marks": 5, "keywords": ["induction", "motor", "stator", "rotor", "squirrel", "cage", "slip", "ring"],
                "topic": "AC Machines", "frequencyAsked": 1, "yearsAppeared": ["2022"],
                "category": "can-be-asked", "difficulty": "medium"
            },
            {
                "id": "bee-011", "subjectId": "basic-electrical", "subjectName": "Basic Electrical Engineering", "cycleOrBranch": "Physics Cycle",
                "type": "numerical", "question": "Find the current in the 5 ohm resistor using Thevenin's theorem.",
                "text": "Find the current in the 5 ohm resistor using Thevenin's theorem.",
                "marks": 6, "keywords": ["thevenin", "theorem", "voltage", "resistance", "current", "equivalent"],
                "formula": "I = Vth / (Rth + RL)",
                "topic": "Network Theorems", "frequencyAsked": 1, "yearsAppeared": ["2024"],
                "category": "can-be-asked", "difficulty": "hard"
            },
            {
                "id": "bee-012", "subjectId": "basic-electrical", "subjectName": "Basic Electrical Engineering", "cycleOrBranch": "Physics Cycle",
                "type": "theory", "question": "Define active, reactive, and apparent power in an AC circuit. Give their units.",
                "text": "Define active, reactive, and apparent power in an AC circuit. Give their units.",
                "marks": 3, "keywords": ["active", "reactive", "apparent", "power", "watts", "vars", "va", "triangle"],
                "topic": "AC Circuits", "frequencyAsked": 1, "yearsAppeared": ["2025"],
                "category": "can-be-asked", "difficulty": "easy"
            }
        ]
    },
    {
        "subjectId": "engineering-mechanics",
        "subjectName": "Engineering Mechanics",
        "cycleOrBranch": "Physics Cycle",
        "totalQuestions": 8,
        "mostAskedCount": 3,
        "moderatelyAskedCount": 3,
        "canBeAskedCount": 2,
        "questions": [
            {
                "id": "em-001", "subjectId": "engineering-mechanics", "subjectName": "Engineering Mechanics", "cycleOrBranch": "Physics Cycle",
                "type": "theory", "question": "State and prove Lami's Theorem.",
                "text": "State and prove Lami's Theorem.",
                "marks": 5, "keywords": ["lami", "theorem", "equilibrium", "three", "forces", "sine", "angle"],
                "topic": "Statics", "frequencyAsked": 5, "yearsAppeared": ["2022","2023","2024"],
                "category": "most-asked", "difficulty": "medium"
            },
            {
                "id": "em-002", "subjectId": "engineering-mechanics", "subjectName": "Engineering Mechanics", "cycleOrBranch": "Physics Cycle",
                "type": "numerical", "question": "Find the centroid of an L-shaped cross-section.",
                "text": "Find the centroid of an L-shaped cross-section.",
                "marks": 5, "keywords": ["centroid", "area", "moment", "axis", "reference", "x-bar", "y-bar"],
                "formula": "x = (A1x1 + A2x2)/(A1+A2)",
                "topic": "Centroid", "frequencyAsked": 4, "yearsAppeared": ["2023","2025"],
                "category": "most-asked", "difficulty": "medium"
            },
            {
                "id": "em-003", "subjectId": "engineering-mechanics", "subjectName": "Engineering Mechanics", "cycleOrBranch": "Physics Cycle",
                "type": "theory", "question": "Explain the laws of dry friction (Coulomb's Laws).",
                "text": "Explain the laws of dry friction (Coulomb's Laws).",
                "marks": 4, "keywords": ["friction", "coulomb", "dry", "static", "kinetic", "normal", "reaction", "independent", "area"],
                "topic": "Friction", "frequencyAsked": 4, "yearsAppeared": ["2022","2024","2025"],
                "category": "most-asked", "difficulty": "easy"
            },
            {
                "id": "em-004", "subjectId": "engineering-mechanics", "subjectName": "Engineering Mechanics", "cycleOrBranch": "Physics Cycle",
                "type": "numerical", "question": "Calculate the moment of inertia of a T-section about its centroidal axis.",
                "text": "Calculate the moment of inertia of a T-section about its centroidal axis.",
                "marks": 6, "keywords": ["moment", "inertia", "parallel", "axis", "theorem", "t-section", "centroidal"],
                "formula": "I = I_cg + Ad^2",
                "topic": "Moment of Inertia", "frequencyAsked": 3, "yearsAppeared": ["2023","2024"],
                "category": "moderately-asked", "difficulty": "hard"
            },
            {
                "id": "em-005", "subjectId": "engineering-mechanics", "subjectName": "Engineering Mechanics", "cycleOrBranch": "Physics Cycle",
                "type": "theory", "question": "State D'Alembert's Principle and explain its significance.",
                "text": "State D'Alembert's Principle and explain its significance.",
                "marks": 4, "keywords": ["dalembert", "principle", "inertia", "force", "dynamic", "equilibrium", "statics"],
                "topic": "Dynamics", "frequencyAsked": 2, "yearsAppeared": ["2022"],
                "category": "moderately-asked", "difficulty": "medium"
            },
            {
                "id": "em-006", "subjectId": "engineering-mechanics", "subjectName": "Engineering Mechanics", "cycleOrBranch": "Physics Cycle",
                "type": "numerical", "question": "A particle moves with equation s = t^3 - 6t^2 + 9t + 4. Find velocity and acceleration at t=2s.",
                "text": "A particle moves with equation s = t^3 - 6t^2 + 9t + 4. Find velocity and acceleration at t=2s.",
                "marks": 4, "keywords": ["velocity", "acceleration", "displacement", "derivative", "kinematics"],
                "formula": "v = ds/dt = 3t^2 - 12t + 9. a = dv/dt = 6t - 12. At t=2, v = -3 m/s, a = 0 m/s^2",
                "topic": "Kinematics", "frequencyAsked": 2, "yearsAppeared": ["2024","2025"],
                "category": "moderately-asked", "difficulty": "easy"
            },
            {
                "id": "em-007", "subjectId": "engineering-mechanics", "subjectName": "Engineering Mechanics", "cycleOrBranch": "Physics Cycle",
                "type": "theory", "question": "Define angle of repose and angle of friction. Prove they are equal.",
                "text": "Define angle of repose and angle of friction. Prove they are equal.",
                "marks": 3, "keywords": ["angle", "repose", "friction", "inclined", "plane", "tangent", "mu"],
                "topic": "Friction", "frequencyAsked": 1, "yearsAppeared": ["2023"],
                "category": "can-be-asked", "difficulty": "easy"
            },
            {
                "id": "em-008", "subjectId": "engineering-mechanics", "subjectName": "Engineering Mechanics", "cycleOrBranch": "Physics Cycle",
                "type": "theory", "question": "What is the difference between a truss and a frame?",
                "text": "What is the difference between a truss and a frame?",
                "marks": 3, "keywords": ["truss", "frame", "two-force", "members", "multi-force", "joints", "pinned"],
                "topic": "Trusses", "frequencyAsked": 1, "yearsAppeared": ["2025"],
                "category": "can-be-asked", "difficulty": "easy"
            }
        ]
    },
    {
        "subjectId": "programming-in-c",
        "subjectName": "Programming in C",
        "cycleOrBranch": "Chemistry Cycle",
        "totalQuestions": 8,
        "mostAskedCount": 3,
        "moderatelyAskedCount": 3,
        "canBeAskedCount": 2,
        "questions": [
            {
                "id": "c-001", "subjectId": "programming-in-c", "subjectName": "Programming in C", "cycleOrBranch": "Chemistry Cycle",
                "type": "theory", "question": "Explain call by value and call by reference with examples.",
                "text": "Explain call by value and call by reference with examples.",
                "marks": 5, "keywords": ["call", "value", "reference", "pointer", "address", "copy", "function", "arguments"],
                "topic": "Functions", "frequencyAsked": 5, "yearsAppeared": ["2022","2023","2024","2025"],
                "category": "most-asked", "difficulty": "medium"
            },
            {
                "id": "c-002", "subjectId": "programming-in-c", "subjectName": "Programming in C", "cycleOrBranch": "Chemistry Cycle",
                "type": "theory", "question": "What is recursion? Write a C program to find the factorial of a number using recursion.",
                "text": "What is recursion? Write a C program to find the factorial of a number using recursion.",
                "marks": 5, "keywords": ["recursion", "factorial", "function", "itself", "base", "case"],
                "topic": "Functions", "frequencyAsked": 4, "yearsAppeared": ["2023","2024"],
                "category": "most-asked", "difficulty": "medium"
            },
            {
                "id": "c-003", "subjectId": "programming-in-c", "subjectName": "Programming in C", "cycleOrBranch": "Chemistry Cycle",
                "type": "theory", "question": "Differentiate between array and structure in C.",
                "text": "Differentiate between array and structure in C.",
                "marks": 4, "keywords": ["array", "structure", "homogeneous", "heterogeneous", "data", "types", "memory", "contiguous"],
                "topic": "Structures", "frequencyAsked": 4, "yearsAppeared": ["2022","2025"],
                "category": "most-asked", "difficulty": "easy"
            },
            {
                "id": "c-004", "subjectId": "programming-in-c", "subjectName": "Programming in C", "cycleOrBranch": "Chemistry Cycle",
                "type": "numerical", "question": "Write a C program to check whether a given string is a palindrome or not without using library functions.",
                "text": "Write a C program to check whether a given string is a palindrome or not without using library functions.",
                "marks": 5, "keywords": ["string", "palindrome", "reverse", "compare", "loop", "character"],
                "formula": "int isPal = 1; for(i=0, j=len-1; i<j; i++, j--) if(str[i]!=str[j]) {isPal=0; break;}",
                "topic": "Strings", "frequencyAsked": 3, "yearsAppeared": ["2023","2024"],
                "category": "moderately-asked", "difficulty": "medium"
            },
            {
                "id": "c-005", "subjectId": "programming-in-c", "subjectName": "Programming in C", "cycleOrBranch": "Chemistry Cycle",
                "type": "theory", "question": "Explain dynamic memory allocation functions in C (malloc, calloc, realloc, free).",
                "text": "Explain dynamic memory allocation functions in C (malloc, calloc, realloc, free).",
                "marks": 5, "keywords": ["dynamic", "memory", "allocation", "malloc", "calloc", "realloc", "free", "heap", "pointer"],
                "topic": "Pointers", "frequencyAsked": 2, "yearsAppeared": ["2022","2025"],
                "category": "moderately-asked", "difficulty": "medium"
            },
            {
                "id": "c-006", "subjectId": "programming-in-c", "subjectName": "Programming in C", "cycleOrBranch": "Chemistry Cycle",
                "type": "numerical", "question": "Write a C program to multiply two matrices.",
                "text": "Write a C program to multiply two matrices.",
                "marks": 6, "keywords": ["matrix", "multiplication", "array", "2D", "nested", "loops"],
                "formula": "c[i][j] += a[i][k] * b[k][j]",
                "topic": "Arrays", "frequencyAsked": 2, "yearsAppeared": ["2024"],
                "category": "moderately-asked", "difficulty": "hard"
            },
            {
                "id": "c-007", "subjectId": "programming-in-c", "subjectName": "Programming in C", "cycleOrBranch": "Chemistry Cycle",
                "type": "theory", "question": "Explain the switch statement with its syntax and an example.",
                "text": "Explain the switch statement with its syntax and an example.",
                "marks": 4, "keywords": ["switch", "case", "break", "default", "conditional", "control"],
                "topic": "Control Structures", "frequencyAsked": 1, "yearsAppeared": ["2023"],
                "category": "can-be-asked", "difficulty": "easy"
            },
            {
                "id": "c-008", "subjectId": "programming-in-c", "subjectName": "Programming in C", "cycleOrBranch": "Chemistry Cycle",
                "type": "theory", "question": "What is a pointer to a function? Give an example.",
                "text": "What is a pointer to a function? Give an example.",
                "marks": 3, "keywords": ["pointer", "function", "address", "invocation", "callback"],
                "topic": "Pointers", "frequencyAsked": 1, "yearsAppeared": ["2025"],
                "category": "can-be-asked", "difficulty": "hard"
            }
        ]
    }
]

for new_sub in new_subjects:
    if new_sub["subjectId"] not in existing_subjects:
        data.append(new_sub)

with open(quiz_path, 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2)

print("Quiz data populated with additional subjects successfully.")
