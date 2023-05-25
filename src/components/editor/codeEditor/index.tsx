import { FC, useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { createTheme } from '@uiw/codemirror-themes';
import { tags as t } from '@lezer/highlight';
import { graphql } from 'cm6-graphql';
import { buildClientSchema } from 'graphql';

import { updateQuery, selectQuery } from '../../../store/features/editorSlice';
import { useAppDispatch, useAppSelector } from '../../../hooks/hook';
import { useGetGraphQLSchemaQuery } from '../../../store/services/graphQlApi';

const CodeEditor: FC = () => {
  const [, setValue] = useState<string>('');
  const query = useAppSelector(selectQuery);

  const dispatch = useAppDispatch();

  const { data, isFetching } = useGetGraphQLSchemaQuery();
  const schema = data && buildClientSchema(data);

  const onChangeValue = (value: string): void => {
    setValue(value);
    dispatch(updateQuery(value));
  };

  const myTheme = createTheme({
    theme: 'dark',
    settings: {
      background: '#000000',
      caret: '#ffffff',
    },
    styles: [{ tag: t.keyword, color: 'red' }],
  });

  return (
    <>
      {isFetching && <div className="codemirror__loading">Loading...</div>}
      {!isFetching && (
        <CodeMirror
          value={query}
          width="100%"
          onChange={onChangeValue}
          extensions={[graphql(schema)]}
          theme={myTheme}
          basicSetup={{
            autocompletion: true,
          }}
        />
      )}
    </>
  );
};

export default CodeEditor;