ComplexDiagram(
  Choice(1,
    Sequence('(', NonTerminal('description', {href: '#description'}), ')'),
    ZeroOrMore('not ) or as_agreed_by')
  )
).addTo();
