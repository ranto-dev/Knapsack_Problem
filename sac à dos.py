# Solution approchée - Algorithme glouton
def sacADos_naif(capacite, elements):
    elements_tri = sorted(elements, key=lambda x: x[2])
    elements_selection = []
    poids_total = 0

    while elements_tri:
        ele = elements_tri.pop()
        if ele[1] + poids_total <= capacite:
            elements_selection.append(ele)
            poids_total += ele[1]

    return sum([i[2] for i in elements_selection]), elements_selection

# Solution force brute - Recherche de toutes les solutions
def sacADos_force_brute(capacite, elements, elements_selection = []):
    if elements:
        val1, lstVal1 = sacADos_force_brute(capacite, elements[1:], elements_selection)
        val = elements[0]
        if val[1] <= capacite:
            val2, lstVal2 = sacADos_force_brute(capacite - val[1], elements[1:], elements_selection + [val])
            if val1 < val2:
                return val2, lstVal2

        return val1, lstVal1
    else:
        return sum([i[2] for i in elements_selection]), elements_selection

# Solution optimale - programmation dynamique
def sacADos_dynamique(capacite, elements):
    matrice = [[0 for x in range(capacite + 1)] for x in range(len(elements) + 1)]

    for i in range(1, len(elements) + 1):
        for w in range(1, capacite + 1):
            if elements[i-1][1] <= w:
                matrice[i][w] = max(elements[i-1][2] + matrice[i-1][w-elements[i-1][1]], matrice[i-1][w])
            else:
                matrice[i][w] = matrice[i-1][w]

    # Retrouver les éléments en fonction de la somme
    w = capacite
    n = len(elements)
    elements_selection = []

    while w >= 0 and n >= 0:
        e = elements[n-1]
        if matrice[n][w] == matrice[n-1][w-e[1]] + e[2]:
            elements_selection.append(e)
            w -= e[1]

        n -= 1

    return matrice[-1][-1], elements_selection

# Nom
# poids
# Valeur
element = [('Montre à gousset', 2, 6),
        ('Boule de bowling', 3, 10),
        ('Portrait de tata Germaine', 4, 12)]
print('Algo naif', sacADos_naif(5, element))
element = [('Montre à gousset', 2, 6),
        ('Boule de bowling', 3, 10),
        ('Portrait de tata Germaine', 4, 12)]
print('Algo force', sacADos_force_brute(5, element))
element = [('Montre à gousset', 2, 6),
        ('Boule de bowling', 3, 10),
        ('Portrait de tata Germaine', 4, 12)]
print('Algo dynamique', sacADos_dynamique(5, element))
