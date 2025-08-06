'use client'

import { PDFDownloadLink } from '@react-pdf/renderer'
import { Button } from '@/components/ui/button'
import { ReportPDF } from './ReportPDF'
import { campaigns } from '@/components/DataTable/mockData'

export function PDFDownloadButton() {
  return (
    <PDFDownloadLink
      document={<ReportPDF data={campaigns} />}
      fileName="admybrand-report.pdf"
    >
      {({ loading }) =>
        loading ? 'Generating PDF...' : <Button>Download PDF</Button>
      }
    </PDFDownloadLink>
  )
}
