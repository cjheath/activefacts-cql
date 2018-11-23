ComplexDiagram(
  Choice(0,
    NonTerminal('range_list', {href: '#range_list'}),
    Sequence(
      NonTerminal('parameter_literal', {href: '#parameter_literal'}),
      Choice(0, Skip(), 'min', 'max')
    )
  )
).addTo();
