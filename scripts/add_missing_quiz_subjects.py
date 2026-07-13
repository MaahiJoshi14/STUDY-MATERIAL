import json

with open('src/data/quizData.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

existing_ids = {item['subjectId'] for item in data}
print('Current IDs:', sorted(existing_ids))

new_subjects = []

# ── APPLIED MATHEMATICS (Chemistry Cycle) ──
if 'applied-mathematics' not in existing_ids:
    new_subjects.append({
        'subjectId': 'applied-mathematics',
        'subjectName': 'Applied Mathematics',
        'cycleOrBranch': 'Chemistry Cycle',
        'totalQuestions': 12,
        'mostAskedCount': 4,
        'moderatelyAskedCount': 4,
        'canBeAskedCount': 4,
        'questions': [
            {
                'id': 'am-001', 'subjectId': 'applied-mathematics', 'subjectName': 'Applied Mathematics',
                'cycleOrBranch': 'Chemistry Cycle', 'type': 'numerical',
                'question': 'Find the rank of matrix A = [[1,2,3],[2,4,6],[3,6,9]].',
                'text': 'Find the rank of matrix A = [[1,2,3],[2,4,6],[3,6,9]].',
                'marks': 5, 'keywords': ['rank', 'row echelon', 'zero rows', 'linearly dependent'],
                'formula': 'rank = 1', 'topic': 'Matrices', 'frequencyAsked': 6,
                'yearsAppeared': ['2022', '2023', '2024', '2025'], 'category': 'most-asked', 'difficulty': 'easy',
                'explanation': 'All rows are multiples of row 1. After row reduction only 1 non-zero row remains. rank(A) = 1.'
            },
            {
                'id': 'am-002', 'subjectId': 'applied-mathematics', 'subjectName': 'Applied Mathematics',
                'cycleOrBranch': 'Chemistry Cycle', 'type': 'numerical',
                'question': 'Find eigenvalues of A = [[4,1],[2,3]].',
                'text': 'Find eigenvalues of A = [[4,1],[2,3]].',
                'marks': 5, 'keywords': ['characteristic equation', 'determinant', 'lambda', 'eigenvalue'],
                'formula': 'lambda = 5 and 2', 'topic': 'Matrices', 'frequencyAsked': 5,
                'yearsAppeared': ['2022', '2023', '2024', '2025'], 'category': 'most-asked', 'difficulty': 'easy',
                'explanation': 'det(A-lambda*I) = (4-lambda)(3-lambda)-2 = lambda^2 - 7*lambda + 10 = 0, so lambda = 5 or 2.'
            },
            {
                'id': 'am-003', 'subjectId': 'applied-mathematics', 'subjectName': 'Applied Mathematics',
                'cycleOrBranch': 'Chemistry Cycle', 'type': 'theory',
                'question': 'State Cayley-Hamilton theorem and verify for A = [[1,2],[3,4]].',
                'text': 'State Cayley-Hamilton theorem and verify for A = [[1,2],[3,4]].',
                'marks': 5, 'keywords': ['characteristic equation', 'satisfies', 'eigenvalue', 'identity matrix'],
                'topic': 'Matrices', 'frequencyAsked': 5, 'yearsAppeared': ['2022', '2023', '2024', '2025'],
                'category': 'most-asked', 'difficulty': 'medium',
                'explanation': 'Cayley-Hamilton: every matrix satisfies its own characteristic equation. Char eq of A is lambda^2 - 5*lambda - 2 = 0. Verify A^2 - 5A - 2I = 0.'
            },
            {
                'id': 'am-004', 'subjectId': 'applied-mathematics', 'subjectName': 'Applied Mathematics',
                'cycleOrBranch': 'Chemistry Cycle', 'type': 'numerical',
                'question': 'Solve system: x+y+z=6, x-y+z=2, 2x+y-z=1.',
                'text': 'Solve system: x+y+z=6, x-y+z=2, 2x+y-z=1.',
                'marks': 5, 'keywords': ['Gaussian elimination', 'augmented matrix', 'back substitution'],
                'formula': 'x=1, y=2, z=3', 'topic': 'Matrices', 'frequencyAsked': 4,
                'yearsAppeared': ['2022', '2023', '2025'], 'category': 'most-asked', 'difficulty': 'medium',
                'explanation': 'Using Gaussian elimination on the augmented matrix gives x=1, y=2, z=3.'
            },
            {
                'id': 'am-005', 'subjectId': 'applied-mathematics', 'subjectName': 'Applied Mathematics',
                'cycleOrBranch': 'Chemistry Cycle', 'type': 'numerical',
                'question': 'Find partial derivatives dz/dx and dz/dy for z = x^3 + 3x^2*y + y^3.',
                'text': 'Find partial derivatives for z = x^3 + 3x^2*y + y^3.',
                'marks': 5, 'keywords': ['partial derivative', '3x squared', '6xy', '3y squared'],
                'formula': 'dz/dx = 3x^2 + 6xy, dz/dy = 3x^2 + 3y^2', 'topic': 'Partial Differentiation',
                'frequencyAsked': 4, 'yearsAppeared': ['2023', '2024', '2025'], 'category': 'moderately-asked', 'difficulty': 'easy',
                'explanation': 'dz/dx = 3x^2 + 6xy (treat y constant), dz/dy = 3x^2 + 3y^2 (treat x constant).'
            },
            {
                'id': 'am-006', 'subjectId': 'applied-mathematics', 'subjectName': 'Applied Mathematics',
                'cycleOrBranch': 'Chemistry Cycle', 'type': 'numerical',
                'question': 'Evaluate double integral of (x^2 + y^2) over 0 to 1 for both x and y.',
                'text': 'Evaluate double integral of (x^2 + y^2) over region 0<=x<=1, 0<=y<=1.',
                'marks': 5, 'keywords': ['double integral', 'x squared', 'y squared', 'limits', '2/3'],
                'formula': 'result = 2/3', 'topic': 'Integration', 'frequencyAsked': 4,
                'yearsAppeared': ['2023', '2024', '2025'], 'category': 'moderately-asked', 'difficulty': 'medium',
                'explanation': 'Integral = 2/3 by integrating x^2+y^2 over the unit square.'
            },
            {
                'id': 'am-007', 'subjectId': 'applied-mathematics', 'subjectName': 'Applied Mathematics',
                'cycleOrBranch': 'Chemistry Cycle', 'type': 'numerical',
                'question': 'Find the maxima/minima of f(x,y) = x^3 + y^3 - 3xy.',
                'text': 'Find extrema of f(x,y) = x^3 + y^3 - 3xy.',
                'marks': 5, 'keywords': ['critical point', 'partial derivative', 'saddle point', 'minimum', 'hessian'],
                'formula': 'critical pts: (0,0) saddle, (1,1) min', 'topic': 'Partial Differentiation',
                'frequencyAsked': 3, 'yearsAppeared': ['2023', '2025'], 'category': 'moderately-asked', 'difficulty': 'hard',
                'explanation': 'fx=3x^2-3y=0, fy=3y^2-3x=0 => x=y. Points: (0,0) saddle, (1,1) local min.'
            },
            {
                'id': 'am-008', 'subjectId': 'applied-mathematics', 'subjectName': 'Applied Mathematics',
                'cycleOrBranch': 'Chemistry Cycle', 'type': 'theory',
                'question': 'State Stokes theorem and write its mathematical form.',
                'text': 'State Stokes theorem with mathematical form.',
                'marks': 5, 'keywords': ['curl', 'surface integral', 'line integral', 'boundary', 'Green'],
                'topic': 'Vector Calculus', 'frequencyAsked': 3, 'yearsAppeared': ['2023', '2024'],
                'category': 'moderately-asked', 'difficulty': 'medium',
                'explanation': 'Stokes Theorem: closed line integral F.dr = surface integral of curl(F).dS over bounded surface.'
            },
            {
                'id': 'am-009', 'subjectId': 'applied-mathematics', 'subjectName': 'Applied Mathematics',
                'cycleOrBranch': 'Chemistry Cycle', 'type': 'numerical',
                'question': 'Find Laplace transform of f(t) = t * e^(2t).',
                'text': 'Find L{t * e^(2t)}.',
                'marks': 5, 'keywords': ['Laplace transform', 'shifting', 's-2', '1/(s-2)^2'],
                'formula': 'L{t*e^(2t)} = 1/(s-2)^2', 'topic': 'Laplace Transform', 'frequencyAsked': 2,
                'yearsAppeared': ['2024', '2025'], 'category': 'can-be-asked', 'difficulty': 'medium',
                'explanation': 'Using first shifting theorem: L{t*e^(2t)} = 1/(s-2)^2 for s > 2.'
            },
            {
                'id': 'am-010', 'subjectId': 'applied-mathematics', 'subjectName': 'Applied Mathematics',
                'cycleOrBranch': 'Chemistry Cycle', 'type': 'theory',
                'question': 'Explain curvature of a curve and write its formula.',
                'text': 'Explain curvature of a curve with its formula.',
                'marks': 3, 'keywords': ['radius of curvature', 'bending', 'kappa', 'd/ds'],
                'formula': 'kappa = |y\'\'| / (1+y\'^2)^(3/2)', 'topic': 'Calculus', 'frequencyAsked': 2,
                'yearsAppeared': ['2022', '2025'], 'category': 'can-be-asked', 'difficulty': 'easy',
                'explanation': 'Curvature k measures how sharply a curve bends. k = |y\'\'|/(1+y\'^2)^(3/2).'
            },
            {
                'id': 'am-011', 'subjectId': 'applied-mathematics', 'subjectName': 'Applied Mathematics',
                'cycleOrBranch': 'Chemistry Cycle', 'type': 'numerical',
                'question': 'Evaluate integral of sin^2(x) from 0 to pi.',
                'text': 'Evaluate integral of sin^2(x) from 0 to pi.',
                'marks': 3, 'keywords': ['reduction formula', 'pi/2', 'half angle', 'integration'],
                'formula': 'result = pi/2', 'topic': 'Integration', 'frequencyAsked': 2,
                'yearsAppeared': ['2022', '2024'], 'category': 'can-be-asked', 'difficulty': 'easy',
                'explanation': 'Using sin^2(x) = (1-cos2x)/2, integral from 0 to pi = pi/2.'
            },
            {
                'id': 'am-012', 'subjectId': 'applied-mathematics', 'subjectName': 'Applied Mathematics',
                'cycleOrBranch': 'Chemistry Cycle', 'type': 'numerical',
                'question': 'Find gradient of phi = x^2*y + y*z^2 at point (1, 2, 3).',
                'text': 'Find gradient of phi = x^2*y + y*z^2 at (1,2,3).',
                'marks': 5, 'keywords': ['gradient', 'del operator', 'partial derivatives', 'vector'],
                'formula': 'grad = 4i + 10j + 12k', 'topic': 'Vector Calculus', 'frequencyAsked': 2,
                'yearsAppeared': ['2023'], 'category': 'can-be-asked', 'difficulty': 'medium',
                'explanation': 'At (1,2,3): d/dx=2xy=4, d/dy=x^2+z^2=10, d/dz=2yz=12. grad = 4i+10j+12k.'
            }
        ]
    })

# ── BASIC MECHANICAL ENGINEERING (Chemistry Cycle) ──
if 'basic-mechanical-engineering' not in existing_ids:
    new_subjects.append({
        'subjectId': 'basic-mechanical-engineering',
        'subjectName': 'Basic Mechanical Engineering',
        'cycleOrBranch': 'Chemistry Cycle',
        'totalQuestions': 12,
        'mostAskedCount': 4,
        'moderatelyAskedCount': 4,
        'canBeAskedCount': 4,
        'questions': [
            {
                'id': 'bme-001', 'subjectId': 'basic-mechanical-engineering', 'subjectName': 'Basic Mechanical Engineering',
                'cycleOrBranch': 'Chemistry Cycle', 'type': 'theory',
                'question': 'State and explain First and Second Law of Thermodynamics with examples.',
                'text': 'State First and Second Law of Thermodynamics.',
                'marks': 5, 'keywords': ['energy conservation', 'heat', 'work', 'entropy', 'Kelvin-Planck', 'Clausius'],
                'topic': 'Thermodynamics', 'frequencyAsked': 6, 'yearsAppeared': ['2022', '2023', '2024', '2025'],
                'category': 'most-asked', 'difficulty': 'medium',
                'explanation': 'First Law: Q=DeltaU+W (energy conserved). Second Law: entropy increases, no 100% efficient engine.'
            },
            {
                'id': 'bme-002', 'subjectId': 'basic-mechanical-engineering', 'subjectName': 'Basic Mechanical Engineering',
                'cycleOrBranch': 'Chemistry Cycle', 'type': 'numerical',
                'question': 'A heat engine operates between 800K and 300K. Find its Carnot efficiency.',
                'text': 'Carnot efficiency with T_H=800K, T_L=300K.',
                'marks': 5, 'keywords': ['Carnot efficiency', '1-TL/TH', 'kelvin', 'percentage'],
                'formula': 'eta = 1 - 300/800 = 62.5%', 'topic': 'Thermodynamics', 'frequencyAsked': 5,
                'yearsAppeared': ['2022', '2023', '2025'], 'category': 'most-asked', 'difficulty': 'easy',
                'explanation': 'Carnot efficiency = 1 - T_cold/T_hot = 1 - 300/800 = 0.625 = 62.5%.'
            },
            {
                'id': 'bme-003', 'subjectId': 'basic-mechanical-engineering', 'subjectName': 'Basic Mechanical Engineering',
                'cycleOrBranch': 'Chemistry Cycle', 'type': 'theory',
                'question': 'Explain the working principle of a four-stroke IC engine with a PV diagram.',
                'text': 'Explain four-stroke IC engine with PV diagram.',
                'marks': 5, 'keywords': ['intake', 'compression', 'power', 'exhaust', 'crankshaft', 'piston', 'BDC', 'TDC'],
                'topic': 'IC Engines', 'frequencyAsked': 5, 'yearsAppeared': ['2022', '2023', '2024', '2025'],
                'category': 'most-asked', 'difficulty': 'medium',
                'explanation': '4 strokes: Intake (air-fuel in), Compression (mixture compressed), Power (combustion drives piston), Exhaust (gases expelled).'
            },
            {
                'id': 'bme-004', 'subjectId': 'basic-mechanical-engineering', 'subjectName': 'Basic Mechanical Engineering',
                'cycleOrBranch': 'Chemistry Cycle', 'type': 'theory',
                'question': 'Distinguish between Refrigeration and Air Conditioning. Explain vapour compression refrigeration.',
                'text': 'Vapour compression refrigeration vs Air Conditioning.',
                'marks': 5, 'keywords': ['refrigerant', 'evaporator', 'compressor', 'condenser', 'expansion valve', 'COP'],
                'topic': 'Refrigeration', 'frequencyAsked': 4, 'yearsAppeared': ['2023', '2024', '2025'],
                'category': 'most-asked', 'difficulty': 'medium',
                'explanation': 'VCR cycle: refrigerant evaporates (absorbs heat), compressor raises pressure, condenser releases heat, expansion valve drops pressure.'
            },
            {
                'id': 'bme-005', 'subjectId': 'basic-mechanical-engineering', 'subjectName': 'Basic Mechanical Engineering',
                'cycleOrBranch': 'Chemistry Cycle', 'type': 'theory',
                'question': 'Explain lathe machine operations: turning, facing, taper turning, and knurling.',
                'text': 'Explain lathe operations: turning, facing, taper turning, knurling.',
                'marks': 5, 'keywords': ['turning', 'facing', 'taper', 'knurling', 'tool', 'workpiece', 'chuck', 'feed'],
                'topic': 'Manufacturing', 'frequencyAsked': 4, 'yearsAppeared': ['2022', '2023', '2025'],
                'category': 'moderately-asked', 'difficulty': 'medium',
                'explanation': 'Turning: reduces diameter. Facing: flat end surface. Taper turning: conical surface. Knurling: diamond grip pattern.'
            },
            {
                'id': 'bme-006', 'subjectId': 'basic-mechanical-engineering', 'subjectName': 'Basic Mechanical Engineering',
                'cycleOrBranch': 'Chemistry Cycle', 'type': 'theory',
                'question': 'What is sand casting? Explain the steps in sand casting process.',
                'text': 'Explain sand casting process with steps.',
                'marks': 5, 'keywords': ['mould', 'pattern', 'runner', 'riser', 'molten metal', 'solidification', 'fettling'],
                'topic': 'Manufacturing', 'frequencyAsked': 3, 'yearsAppeared': ['2023', '2024'],
                'category': 'moderately-asked', 'difficulty': 'medium',
                'explanation': 'Sand casting: place pattern in flask, pack sand, remove pattern, pour molten metal, solidify, remove and clean part.'
            },
            {
                'id': 'bme-007', 'subjectId': 'basic-mechanical-engineering', 'subjectName': 'Basic Mechanical Engineering',
                'cycleOrBranch': 'Chemistry Cycle', 'type': 'numerical',
                'question': 'Carnot cycle: T_H=627C, T_L=27C, Q_H=500kJ. Find work done and heat rejected.',
                'text': 'Carnot cycle: T_H=900K, T_L=300K, Q_H=500kJ. Find W and Q_L.',
                'marks': 5, 'keywords': ['Carnot efficiency', 'work done', 'heat rejected', '2/3'],
                'formula': 'eta=1-300/900=0.667; W=333.3kJ; Q_L=166.7kJ', 'topic': 'Thermodynamics',
                'frequencyAsked': 3, 'yearsAppeared': ['2022', '2025'], 'category': 'moderately-asked', 'difficulty': 'medium',
                'explanation': 'T_H=900K, T_L=300K. eta=0.667. W=eta*Q_H=333.3kJ. Q_L=Q_H-W=166.7kJ.'
            },
            {
                'id': 'bme-008', 'subjectId': 'basic-mechanical-engineering', 'subjectName': 'Basic Mechanical Engineering',
                'cycleOrBranch': 'Chemistry Cycle', 'type': 'theory',
                'question': 'Explain COP of refrigerator and heat pump. How are they related?',
                'text': 'COP of refrigerator and heat pump. Relationship.',
                'marks': 3, 'keywords': ['COP', 'refrigerating effect', 'work input', 'heat pump', 'COP_HP = COP_R + 1'],
                'formula': 'COP_R = Q_L/W; COP_HP = COP_R + 1', 'topic': 'Refrigeration',
                'frequencyAsked': 3, 'yearsAppeared': ['2023', '2024'], 'category': 'moderately-asked', 'difficulty': 'easy',
                'explanation': 'COP_R = Q_L/W. COP_HP = Q_H/W. Since Q_H = Q_L + W: COP_HP = COP_R + 1.'
            },
            {
                'id': 'bme-009', 'subjectId': 'basic-mechanical-engineering', 'subjectName': 'Basic Mechanical Engineering',
                'cycleOrBranch': 'Chemistry Cycle', 'type': 'theory',
                'question': 'Explain power transmission via belt drive and gear drive.',
                'text': 'Power transmission: belt drive vs gear drive.',
                'marks': 5, 'keywords': ['belt drive', 'gear drive', 'velocity ratio', 'slip', 'positive drive'],
                'topic': 'Power Transmission', 'frequencyAsked': 2, 'yearsAppeared': ['2022', '2025'],
                'category': 'can-be-asked', 'difficulty': 'medium',
                'explanation': 'Belt: absorbs shocks, slip occurs, low cost. Gear: no slip, precise ratio, higher efficiency.'
            },
            {
                'id': 'bme-010', 'subjectId': 'basic-mechanical-engineering', 'subjectName': 'Basic Mechanical Engineering',
                'cycleOrBranch': 'Chemistry Cycle', 'type': 'theory',
                'question': 'Explain rapid prototyping techniques SLA and FDM.',
                'text': 'Rapid prototyping: SLA and FDM techniques.',
                'marks': 3, 'keywords': ['stereolithography', 'FDM', 'layer', 'UV', 'photopolymer', 'filament'],
                'topic': 'Manufacturing', 'frequencyAsked': 2, 'yearsAppeared': ['2023'],
                'category': 'can-be-asked', 'difficulty': 'medium',
                'explanation': 'SLA: UV laser cures liquid photopolymer layer by layer. FDM: thermoplastic filament extruded layer by layer.'
            },
            {
                'id': 'bme-011', 'subjectId': 'basic-mechanical-engineering', 'subjectName': 'Basic Mechanical Engineering',
                'cycleOrBranch': 'Chemistry Cycle', 'type': 'theory',
                'question': 'State SFEE and apply it to a nozzle.',
                'text': 'State SFEE and apply to a nozzle.',
                'marks': 5, 'keywords': ['SFEE', 'enthalpy', 'velocity', 'nozzle', 'kinetic energy', 'flow work'],
                'formula': 'h1 + V1^2/2 = h2 + V2^2/2', 'topic': 'Thermodynamics',
                'frequencyAsked': 2, 'yearsAppeared': ['2024'], 'category': 'can-be-asked', 'difficulty': 'hard',
                'explanation': 'SFEE for nozzle (Q=W=0): h1+V1^2/2 = h2+V2^2/2. Exit V2 = sqrt(V1^2 + 2*(h1-h2)).'
            },
            {
                'id': 'bme-012', 'subjectId': 'basic-mechanical-engineering', 'subjectName': 'Basic Mechanical Engineering',
                'cycleOrBranch': 'Chemistry Cycle', 'type': 'theory',
                'question': 'Differentiate between 2-stroke and 4-stroke IC engines.',
                'text': 'Compare 2-stroke and 4-stroke engines.',
                'marks': 5, 'keywords': ['2-stroke', '4-stroke', 'power stroke', 'crankshaft revolution', 'ports', 'valves'],
                'topic': 'IC Engines', 'frequencyAsked': 2, 'yearsAppeared': ['2022', '2024'],
                'category': 'can-be-asked', 'difficulty': 'easy',
                'explanation': '2-stroke: power every crank rotation, ports, more pollution. 4-stroke: power every 2 rotations, valves, better efficiency.'
            }
        ]
    })

if new_subjects:
    data.extend(new_subjects)
    with open('src/data/quizData.json', 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2)
    added_ids = [s['subjectId'] for s in new_subjects]
    print(f'Successfully added {len(new_subjects)} new subject(s): {added_ids}')
else:
    print('All key subjects already present! No changes needed.')
    
# Final summary
with open('src/data/quizData.json', 'r', encoding='utf-8') as f:
    final = json.load(f)
print('Final quiz data subjects:', [item['subjectId'] for item in final])
