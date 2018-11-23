ComplexDiagram(
  Sequence(
    NonTerminal('query_clauses', {href: '#query_clauses'}),
    'only', 'if',
    NonTerminal('query_clauses', {href: '#query_clauses'}),
    Optional(NonTerminal('context_note', {href: '#context_note'}), 'skip'),
    NonTerminal('enforcement', {href: '#enforcement'}),
    ';'
  )
).addTo();
