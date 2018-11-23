ComplexDiagram(
  Sequence(
    NonTerminal('query_clauses', {href: '#query_clauses'}),
    Optional(Sequence(
      'where',
      NonTerminal('query_clauses', {href: '#query_clauses'}),
      Choice(0, Skip(), NonTerminal('returning_clause', {href: '#returning_clause'})),
    ), 'skip'),
    ';'
  )
).addTo();
