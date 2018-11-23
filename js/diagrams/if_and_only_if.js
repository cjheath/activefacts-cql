ComplexDiagram(
  Sequence(
    NonTerminal('clauses', {href: '#clauses'}),
    'if', 'and', 'only', 'if',
    NonTerminal('clauses', {href: '#clauses'}),
    Optional(NonTerminal('context_note', {href: '#context_note'}), 'skip'),
    NonTerminal('enforcement', {href: '#enforcement'}),
    ';'
  )
).addTo();
