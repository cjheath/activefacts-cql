ComplexDiagram(
  Sequence(
    'each', Optional('combination'),
    NonTerminal('role_list', {href: '#role_list'}),
    'occurs', NonTerminal('quantifier', {href: '#quantifier'}), Choice(0, 'time', 'times'),
    NonTerminal('enforcement', {href: '#enforcement'}),
    'in',
    NonTerminal('clauses_list', {href: '#clauses_list'}),
    ';'
  )
).addTo();
