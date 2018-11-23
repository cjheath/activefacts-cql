ComplexDiagram(
  Sequence(
    'if',
    NonTerminal('clauses', {href: '#clauses'}),
    'then',
    NonTerminal('clauses', {href: '#clauses'}),
    Optional(NonTerminal('context_note', {href: '#context_note'}), 'skip'),
    NonTerminal('enforcement', {href: '#enforcement'}),
    ';'
  )
).addTo();
