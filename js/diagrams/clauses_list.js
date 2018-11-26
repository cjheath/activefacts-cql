ComplexDiagram(
  Sequence(
    NonTerminal('clauses', {href: '#clauses'}),
    ZeroOrMore(Sequence(
      ',',
      NonTerminal('clauses', {href: '#clauses'})
    ))
  )
).addTo();
