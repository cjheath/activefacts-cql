ComplexDiagram(
  Sequence(
    'for', 'each',
    NonTerminal('role_list', {href: '#role_list'}),
    NonTerminal('quantifier', {href: '#quantifier'}),
    'of', 'these', 'holds',
    NonTerminal('enforcement', {href: '#enforcement'}),
    ':',
    NonTerminal('clauses_list', {href: '#clauses_list'}),
    Optional(NonTerminal('context_note', {href: '#context_note'}), 'skip'),
    ';'
  )
).addTo();
