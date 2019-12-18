import { List, Switch } from 'antd';
import React, { Component, Fragment } from 'react';

import { formatMessage } from 'umi-plugin-react/locale';

type Unpacked<T> = T extends (infer U)[] ? U : T;

class NotificationView extends Component {
  getData = () => {
    const Action = (
      <Switch
        checkedChildren={formatMessage({ id: 'saccoprofile.settings.open' })}
        unCheckedChildren={formatMessage({ id: 'saccoprofile.settings.close' })}
        defaultChecked
      />
    );
    return [
      {
        title: formatMessage({ id: 'saccoprofile.notification.password' }, {}),
        description: formatMessage({ id: 'saccoprofile.notification.password-description' }, {}),
        actions: [Action],
      },
      {
        title: formatMessage({ id: 'saccoprofile.notification.messages' }, {}),
        description: formatMessage({ id: 'saccoprofile.notification.messages-description' }, {}),
        actions: [Action],
      },
      {
        title: formatMessage({ id: 'saccoprofile.notification.todo' }, {}),
        description: formatMessage({ id: 'saccoprofile.notification.todo-description' }, {}),
        actions: [Action],
      },
    ];
  };

  render() {
    const data = this.getData();
    return (
      <Fragment>
        <List<Unpacked<typeof data>>
          itemLayout="horizontal"
          dataSource={data}
          renderItem={item => (
            <List.Item actions={item.actions}>
              <List.Item.Meta title={item.title} description={item.description} />
            </List.Item>
          )}
        />
      </Fragment>
    );
  }
}

export default NotificationView;
