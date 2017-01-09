#
# Autogenerated from a Treetop grammar. Edits may be lost.


#       ActiveFacts CQL Parser.
#       Parse rules relating to definition context.
#
# Copyright (c) 2009 Clifford Heath. Read the LICENSE file.
#
module ActiveFacts
  module CQL
    module Context
      include Treetop::Runtime

      def root
        @root ||= :context_note
      end

      module ContextNote0
        def a
          elements[1]
        end
      end

      module ContextNote1
        def s1
          elements[1]
        end

        def w
          elements[2]
        end

        def s2
          elements[3]
        end

        def context_type
          elements[4]
        end

        def description
          elements[5]
        end

        def agreed
          elements[6]
        end

        def s3
          elements[7]
        end

        def s4
          elements[9]
        end
      end

      module ContextNote2
        def value
          [ w.empty? ? nil : w.value, context_type.value, description.text_value, agreed.empty? ? [] : agreed.a.value]
        end
        def ast
          who = w.empty? ? nil : w.value
          ag = agreed.empty? ? [] : agreed.a.value
          Compiler::ContextNote.new context_type.value, description.text_value, who, ag
        end
      end

      def _nt_context_note
        start_index = index
        if node_cache[:context_note].has_key?(index)
          cached = node_cache[:context_note][index]
          if cached
            node_cache[:context_note][index] = cached = SyntaxNode.new(input, index...(index + 1)) if cached == true
            @index = cached.interval.end
          end
          return cached
        end

        i0, s0 = index, []
        if (match_len = has_terminal?('(', false, index))
          r1 = true
          @index += match_len
        else
          terminal_parse_failure('\'(\'')
          r1 = nil
        end
        s0 << r1
        if r1
          r2 = _nt_s
          s0 << r2
          if r2
            r4 = _nt_who_says
            if r4
              r3 = r4
            else
              r3 = instantiate_node(SyntaxNode,input, index...index)
            end
            s0 << r3
            if r3
              r5 = _nt_s
              s0 << r5
              if r5
                r6 = _nt_context_type
                s0 << r6
                if r6
                  r7 = _nt_description
                  s0 << r7
                  if r7
                    i9, s9 = index, []
                    if (match_len = has_terminal?(',', false, index))
                      r10 = true
                      @index += match_len
                    else
                      terminal_parse_failure('\',\'')
                      r10 = nil
                    end
                    s9 << r10
                    if r10
                      r11 = _nt_as_agreed_by
                      s9 << r11
                    end
                    if s9.last
                      r9 = instantiate_node(SyntaxNode,input, i9...index, s9)
                      r9.extend(ContextNote0)
                    else
                      @index = i9
                      r9 = nil
                    end
                    if r9
                      r8 = r9
                    else
                      r8 = instantiate_node(SyntaxNode,input, index...index)
                    end
                    s0 << r8
                    if r8
                      r12 = _nt_s
                      s0 << r12
                      if r12
                        if (match_len = has_terminal?(')', false, index))
                          r13 = true
                          @index += match_len
                        else
                          terminal_parse_failure('\')\'')
                          r13 = nil
                        end
                        s0 << r13
                        if r13
                          r14 = _nt_s
                          s0 << r14
                        end
                      end
                    end
                  end
                end
              end
            end
          end
        end
        if s0.last
          r0 = instantiate_node(SyntaxNode,input, i0...index, s0)
          r0.extend(ContextNote1)
          r0.extend(ContextNote2)
        else
          @index = i0
          r0 = nil
        end

        node_cache[:context_note][start_index] = r0

        r0
      end

      module WhoSays0
        def according_to
          elements[0]
        end

        def agents
          elements[1]
        end

        def s
          elements[2]
        end

      end

      module WhoSays1
        def value; agents.value; end
      end

      def _nt_who_says
        start_index = index
        if node_cache[:who_says].has_key?(index)
          cached = node_cache[:who_says][index]
          if cached
            node_cache[:who_says][index] = cached = SyntaxNode.new(input, index...(index + 1)) if cached == true
            @index = cached.interval.end
          end
          return cached
        end

        i0, s0 = index, []
        r1 = _nt_according_to
        s0 << r1
        if r1
          r2 = _nt_agents
          s0 << r2
          if r2
            r3 = _nt_s
            s0 << r3
            if r3
              if (match_len = has_terminal?(',', false, index))
                r4 = true
                @index += match_len
              else
                terminal_parse_failure('\',\'')
                r4 = nil
              end
              s0 << r4
            end
          end
        end
        if s0.last
          r0 = instantiate_node(SyntaxNode,input, i0...index, s0)
          r0.extend(WhoSays0)
          r0.extend(WhoSays1)
        else
          @index = i0
          r0 = nil
        end

        node_cache[:who_says][start_index] = r0

        r0
      end

      module ContextType0
        def because
          elements[0]
        end

        def s
          elements[1]
        end
      end

      module ContextType1
        def value; 'because'; end
      end

      module ContextType2
        def value; 'as_opposed_to'; end
      end

      module ContextType3
        def value; 'so_that'; end
      end

      module ContextType4
        def value; 'to_avoid'; end
      end

      def _nt_context_type
        start_index = index
        if node_cache[:context_type].has_key?(index)
          cached = node_cache[:context_type][index]
          if cached
            node_cache[:context_type][index] = cached = SyntaxNode.new(input, index...(index + 1)) if cached == true
            @index = cached.interval.end
          end
          return cached
        end

        i0 = index
        i1, s1 = index, []
        r2 = _nt_because
        s1 << r2
        if r2
          r3 = _nt_s
          s1 << r3
        end
        if s1.last
          r1 = instantiate_node(SyntaxNode,input, i1...index, s1)
          r1.extend(ContextType0)
          r1.extend(ContextType1)
        else
          @index = i1
          r1 = nil
        end
        if r1
          r1 = SyntaxNode.new(input, (index-1)...index) if r1 == true
          r0 = r1
        else
          r4 = _nt_as_opposed_to
          r4.extend(ContextType2)
          r4.extend(ContextType2)
          if r4
            r4 = SyntaxNode.new(input, (index-1)...index) if r4 == true
            r0 = r4
          else
            r5 = _nt_so_that
            r5.extend(ContextType3)
            r5.extend(ContextType3)
            if r5
              r5 = SyntaxNode.new(input, (index-1)...index) if r5 == true
              r0 = r5
            else
              r6 = _nt_to_avoid
              r6.extend(ContextType4)
              r6.extend(ContextType4)
              if r6
                r6 = SyntaxNode.new(input, (index-1)...index) if r6 == true
                r0 = r6
              else
                @index = i0
                r0 = nil
              end
            end
          end
        end

        node_cache[:context_type][start_index] = r0

        r0
      end

      module Description0
        def description
          elements[1]
        end

      end

      module Description1
        def as_agreed_by
          elements[1]
        end
      end

      module Description2
      end

      module Description3
        def node_type; :linking; end
      end

      def _nt_description
        start_index = index
        if node_cache[:description].has_key?(index)
          cached = node_cache[:description][index]
          if cached
            node_cache[:description][index] = cached = SyntaxNode.new(input, index...(index + 1)) if cached == true
            @index = cached.interval.end
          end
          return cached
        end

        i0 = index
        i1, s1 = index, []
        if (match_len = has_terminal?('(', false, index))
          r2 = true
          @index += match_len
        else
          terminal_parse_failure('\'(\'')
          r2 = nil
        end
        s1 << r2
        if r2
          r3 = _nt_description
          s1 << r3
          if r3
            if (match_len = has_terminal?(')', false, index))
              r4 = true
              @index += match_len
            else
              terminal_parse_failure('\')\'')
              r4 = nil
            end
            s1 << r4
          end
        end
        if s1.last
          r1 = instantiate_node(SyntaxNode,input, i1...index, s1)
          r1.extend(Description0)
        else
          @index = i1
          r1 = nil
        end
        if r1
          r1 = SyntaxNode.new(input, (index-1)...index) if r1 == true
          r0 = r1
        else
          s5, i5 = [], index
          loop do
            i6, s6 = index, []
            i7 = index
            i8 = index
            if has_terminal?(@regexps[gr = '\A[()]'] ||= Regexp.new(gr), :regexp, index)
              r9 = true
              @index += 1
            else
              terminal_parse_failure('[()]')
              r9 = nil
            end
            if r9
              r9 = SyntaxNode.new(input, (index-1)...index) if r9 == true
              r8 = r9
            else
              i10, s10 = index, []
              if (match_len = has_terminal?(',', false, index))
                r11 = true
                @index += match_len
              else
                terminal_parse_failure('\',\'')
                r11 = nil
              end
              s10 << r11
              if r11
                r12 = _nt_as_agreed_by
                s10 << r12
              end
              if s10.last
                r10 = instantiate_node(SyntaxNode,input, i10...index, s10)
                r10.extend(Description1)
              else
                @index = i10
                r10 = nil
              end
              if r10
                r10 = SyntaxNode.new(input, (index-1)...index) if r10 == true
                r8 = r10
              else
                @index = i8
                r8 = nil
              end
            end
            if r8
              @index = i7
              r7 = nil
              terminal_parse_failure("(any alternative)", true)
            else
              @terminal_failures.pop
              @index = i7
              r7 = instantiate_node(SyntaxNode,input, index...index)
            end
            s6 << r7
            if r7
              if index < input_length
                r13 = true
                @index += 1
              else
                terminal_parse_failure("any character")
                r13 = nil
              end
              s6 << r13
            end
            if s6.last
              r6 = instantiate_node(SyntaxNode,input, i6...index, s6)
              r6.extend(Description2)
            else
              @index = i6
              r6 = nil
            end
            if r6
              s5 << r6
            else
              break
            end
          end
          r5 = instantiate_node(SyntaxNode,input, i5...index, s5)
          r5.extend(Description3)
          r5.extend(Description3)
          if r5
            r5 = SyntaxNode.new(input, (index-1)...index) if r5 == true
            r0 = r5
          else
            @index = i0
            r0 = nil
          end
        end

        node_cache[:description][start_index] = r0

        r0
      end

    end

    class ContextParser < Treetop::Runtime::CompiledParser
      include Context
    end

  end
end
