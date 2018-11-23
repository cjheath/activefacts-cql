ComplexDiagram(
  Optional(Sequence(
    '(',
    NonTerminal('parameter', {href: '#parameter'}),
    ZeroOrMore(Sequence(
      ',', NonTerminal('parameter', {href: '#parameter'})
    )),
    ')'
  ))
).addTo();
