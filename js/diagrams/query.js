ComplexDiagram(
  Sequence(
    NonTerminal('query_clauses', {href: '#query_clauses'}),
    Optional(NonTerminal('returning_clause', {href: '#returning_clause'}), 'skip'),
    '?'
  )
).addTo();
