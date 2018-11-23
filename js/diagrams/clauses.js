ComplexDiagram(
  Sequence(
    NonTerminal('contracted_clauses', {href: '#contracted_clauses'}),
    ZeroOrMore(Sequence(
      Choice(0, 'and', 'or'),
      NonTerminal('contracted_clauses', {href: '#contracted_clauses'}),
    ))
  )
).addTo();
