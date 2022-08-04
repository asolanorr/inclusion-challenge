import StatusCard from "./components/status-card"

function App() {
  const listOfAPIs = ['accounts', 'assets', 'customers', 'datapoints', 'devices', 'documents', 'forms', 'invites', 'media', 'messages', 'namespaces', 'orders', 'patients', 'relationships', 'rules', 'templates', 'users', 'workflows']

  return (
    <div className='container'>
      {listOfAPIs.map(apiName => {
        return <StatusCard key={apiName} url={apiName} />
      })}
    </div>
  )
}

export default App
