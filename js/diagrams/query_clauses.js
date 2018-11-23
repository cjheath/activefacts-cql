ComplexDiagram(
  Sequence(
    NonTerminal('qualified_clauses', {href: '#qualified_clauses'}),
    ZeroOrMore(Sequence(
      Choice(0, ',', 'and', 'or'),
      NonTerminal('qualified_clauses', {href: '#qualified_clauses'})
    ))
  )
).addTo();
