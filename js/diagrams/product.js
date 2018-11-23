ComplexDiagram(
  Sequence(
    NonTerminal('factor', {href: '#factor'}),
    ZeroOrMore(Sequence(
      Choice(1, '*', '/', '%'),
      NonTerminal('factor', {href: '#factor'})
    ))
  )
).addTo();
