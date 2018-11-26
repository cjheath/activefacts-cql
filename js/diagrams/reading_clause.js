ComplexDiagram(
  Sequence(
    OneOrMore(Choice(1,
      NonTerminal('noun_phrase', {href: '#noun_phrase'}),
      NonTerminal('linking_word', {href: '#linking_word'})
    )),
    Optional(NonTerminal('post_qualifiers', {href: '#post_qualifiers'}), 'skip'),
    Optional(NonTerminal('context_note', {href: '#context_note'}), 'skip'),
    Optional(NonTerminal('reading_contraction', {href: '#reading_contraction'}))
  )
).addTo();
