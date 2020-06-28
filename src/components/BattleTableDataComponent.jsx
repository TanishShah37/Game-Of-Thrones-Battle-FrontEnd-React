import React, { Fragment } from 'react'
import {
  Table,
  Pane,
  Paragraph,
} from 'evergreen-ui'

export default function BattleTableDataComponent (props) {
  return (
    <div className="card mt-3 shadow-sm table-responsive">
    <Fragment>
      <Pane  elevation={4} background="blueTint" border height='60vh' display='flex' flexGrow={0}>
        <Table flex={1} display='flex' flexDirection='column'>
          <Table.Head>
            {Object.keys(props.battles[0]).map(colname => (
              <Table.TextHeaderCell>
                {colname.toUpperCase()}
              </Table.TextHeaderCell>
            ))}
          </Table.Head>

          <Table.VirtualBody
            flex={1}
            allowAutoHeight
          >
            {props.battles.map(battle => {
              return (
                <Table.Row height='auto' paddingY={30} key={battle.id}>
                  {Object.keys(battle).map(key => (
                    <Table.TextCell>
                      <Paragraph  marginY={24}>{battle[key]}</Paragraph>
                    </Table.TextCell>
                  ))}
                </Table.Row>
              )
            })}
          </Table.VirtualBody>
        </Table>
      </Pane>
    </Fragment>
    </div>
  )
}
