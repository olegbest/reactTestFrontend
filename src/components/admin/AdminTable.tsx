import { ReactNode, useMemo } from 'react';

import CSSClasses from './AdminTable.module.scss';

export interface RowModel {
  [key: string]: unknown;
  id: number | string;
}
export interface PropsModel {
  data: RowModel[];
  headers?: string[];

  columns?: string[];
  actionsNode?: (row: RowModel) => ReactNode;
}

function AdminTable(props: PropsModel) {
  const rows = props.data;

  const columns = useMemo(() => {
    if (props.columns?.length) return props.columns;
    if (!rows[0]) return [];

    return Object.keys(rows[0]);
  }, [rows]);

  const headers = useMemo(() => {
    if (!props.headers?.length) return columns;

    return props.headers;
  }, [columns, props.headers]);

  function ActionsNode(row: RowModel) {
    const className = [CSSClasses.cell].join(' ');

    return props.actionsNode && <td className={className}>{props.actionsNode(row)}</td>;
  }

  return (
    <table className={CSSClasses.table}>
      <thead>
        <tr>
          {headers.map((header) => (
            <th className={CSSClasses.headerCell} key={header}>
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.id}>
            {columns.map((column) => (
              <td className={CSSClasses.cell} key={column}>
                {String(row[column])}
              </td>
            ))}
            {ActionsNode(row)}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default AdminTable;
