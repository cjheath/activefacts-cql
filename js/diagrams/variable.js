ComplexDiagram(
  Sequence(
    NonTerminal('term', {href: '#term'}),
    Choice(0, Skip(), 
      NonTerminal('role_name', {href: '#role_name'}),
      NonTerminal('subscript', {href: '#subscript'})
    )
  )
).addTo();
