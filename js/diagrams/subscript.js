ComplexDiagram(
  Sequence(
    '(',
    OneOrMore(NonTerminal('digit', {href: '#digit'})),
    ')'
  )
).addTo();
