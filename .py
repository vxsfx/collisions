x = 0
y = 1


def m():
    v1 = [0, 10]
    v2 = [10, 0]

    m1 = 5
    m2 = 5
    mt = m1 + m2

    vt = [v1[x] + v2[x], v1[y] + v2[y]]

    rv1 = [ vt[x] * v1[x], vt[y] * v1[y] ]

    rvt = [ rv1[x] * m1 / mt, rv1[y] * m1 / mt ]



    print(rvt)

m()