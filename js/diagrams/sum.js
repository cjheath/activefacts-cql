ComplexDiagram(
  Sequence(
    NonTerminal('product', {href: '#product'}),
    ZeroOrMore(Sequence(
      Choice(0, '+', '-'),
      NonTerminal('product', {href: '#product'})
    ))
  )
).addTo();
