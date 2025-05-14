import React from 'react'

export default function CompareFeaturesSection() {
  
  const columns = [
    { id: 'feature', label: 'Feature' },
    { id: 'residents', label: 'Residents' },
    { id: 'government', label: 'Government' },
    { id: 'providers', label: 'Providers' }
  ];

  const rows = [
    { 
      id: 1,
      feature: 'Issue Reporting',
      residents: true,
      government: true,
      providers: false
    },
    { 
      id: 2,
      feature: 'Analytics Dashboard',
      residents: false,
      government: true,
      providers: true
    },
    { 
      id: 3,
      feature: 'Service Management',
      residents: false,
      government: true,
      providers: true
    },
    { 
      id: 4,
      feature: 'Social Feed',
      residents: true,
      government: true,
      providers: true
    }
  ];

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold" style={{ fontSize: "42px" }}>
          Compare Features by Role
        </h1>
        <p className="fw-bold text-muted">
          See how Citio adapts to different user needs.
        </p>
      </div>

      {/* Features Table */}
      <div className="table-responsive">
        <table className="table table-hover">
          <thead>
            <tr>
              {columns.map((column) => (
                <th 
                  key={column.id} 
                  scope="col"
                  className={column.id === 'feature' ? 'text-start' : 'text-center'}
                  style={{ 
                    fontSize: 18, 
                    fontWeight: 600,
                    color: '#333',
                    padding: '16px 20px',
                    borderBottom: '1px solid #dee2e6'
                  }}
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id}>
                <td 
                  className="text-start" 
                  style={{ 
                    fontSize: 16, 
                    padding: '16px 20px',
                    color: '#444',
                    fontWeight: 500,
                    borderBottom: '1px solid #dee2e6'
                  }}
                >
                  {row.feature}
                </td>
                <td 
                  className="text-center" 
                  style={{ 
                    fontSize: 18, 
                    padding: '16px 20px',
                    color: '#14d81a',
                    borderBottom: '1px solid #dee2e6'
                  }}
                >
                  {row.residents ? '✓' : '-'}
                </td>
                <td 
                  className="text-center" 
                  style={{ 
                    fontSize: 18, 
                    padding: '16px 20px',
                    color: '#14d81a',
                    borderBottom: '1px solid #dee2e6'
                  }}
                >
                  {row.government ? '✓' : '-'}
                </td>
                <td 
                  className="text-center" 
                  style={{ 
                    fontSize: 18, 
                    padding: '16px 20px',
                    color: '#14d81a',
                    borderBottom: '1px solid #dee2e6'
                  }}
                >
                  {row.providers ? '✓' : '-'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}