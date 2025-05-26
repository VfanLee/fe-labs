import FuncPanel from '@/components/common/FuncPanel/index.jsx';
import { useState } from 'react';

const View = () => {
  const [loading, setLoading] = useState(false);
  const [loadmsg, setLoadmsg] = useState('加载中...');

  const renderHeader = () => {
    return <div>header</div>;
  };

  const renderBody = () => {
    return <div>body</div>;
  };

  return (
    <>
      <FuncPanel loading={loading} loadmsg={loadmsg} headerPanel={renderHeader()} bodyPanel={renderBody()} />
    </>
  );
};

export default View;
