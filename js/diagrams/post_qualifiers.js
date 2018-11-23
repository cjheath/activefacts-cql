ComplexDiagram(
  Sequence(
    '[',
    NonTerminal('post_qualifier', {href: '#post_qualifier'}),
    ZeroOrMore(Sequence(
      ',',
      NonTerminal('post_qualifier', {href: '#post_qualifier'})
    ))
  )
).addTo();
