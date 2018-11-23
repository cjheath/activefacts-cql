ComplexDiagram(
  Choice(1,
    Sequence('was', NonTerminal('term', {href: '#term'})),
    OneOrMore(NonTerminal('id', {href: '#id'}))
  )
).addTo();
