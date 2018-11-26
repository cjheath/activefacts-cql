ComplexDiagram(
  Sequence(
    NonTerminal('definition_clause', {href: '#definition_clause'}),
    OneOrMore(Sequence(
      ',',
      NonTerminal('definition_clause', {href: '#definition_clause'})
    ))
  )
).addTo();
