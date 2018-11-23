ComplexDiagram(
  Sequence(
    'either',
    NonTerminal('clauses', {href: '#clauses'}),
    'or',
    NonTerminal('clauses', {href: '#clauses'}),
    Optional(NonTerminal('context_note', {href: '#context_note'}), 'skip'),
    NonTerminal('enforcement', {href: '#enforcement'}),
    'but', 'not', 'both',
    ';'
  )
).addTo();
