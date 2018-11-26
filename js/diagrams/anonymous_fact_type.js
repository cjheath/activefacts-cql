ComplexDiagram(
  Sequence(
    NonTerminal('reading_clauses', {href: '#reading_clauses'}),
    Optional(Sequence(
      'where',
      NonTerminal('query_clauses', {href: '#query_clauses'}),
      Choice(0, Skip(), NonTerminal('returning_clause', {href: '#returning_clause'})),
    ), 'skip'),
    ';'
  )
).addTo();
