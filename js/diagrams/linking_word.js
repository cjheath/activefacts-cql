ComplexDiagram(
  Choice(1,
    Sequence(NonTerminal('id'), OneOrMore(Sequence('-', NonTerminal('id')))),
    'id excluding non-phrase words'
  )
).addTo();
