ComplexDiagram(
  Choice(1,
    NonTerminal('comparison', {href: '#comparison'}),
    OneOrMore(Choice(1,
      NonTerminal('contraction', {href: '#contraction'}),
      NonTerminal('noun_phrase', {href: '#noun_phrase'}),
      NonTerminal('linking_word', {href: '#linking_word'})
    ))
  )
).addTo();
