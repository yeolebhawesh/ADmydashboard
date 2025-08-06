// components/PDF/ReportPDF.tsx
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer'
import { Campaign } from '@/types/campaign'

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 12,
    fontFamily: 'Helvetica',
  },
  header: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  table: {
  width: '100%',
  marginVertical: 10,
},

  tableRow: {
    flexDirection: 'row',
  },
  tableColHeader: {
    width: '14.28%',
    backgroundColor: '#f0f0f0',
    padding: 4,
    fontWeight: 'bold',
  },
  tableCol: {
    width: '14.28%',
    padding: 4,
  },
})

export const ReportPDF = ({ data }: { data: Campaign[] }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.header}>Campaign Performance Report</Text>
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <Text style={styles.tableColHeader}>Campaign</Text>
          <Text style={styles.tableColHeader}>Impressions</Text>
          <Text style={styles.tableColHeader}>Clicks</Text>
          <Text style={styles.tableColHeader}>CTR</Text>
          <Text style={styles.tableColHeader}>Conversions</Text>
          <Text style={styles.tableColHeader}>CPC</Text>
          <Text style={styles.tableColHeader}>Status</Text>
        </View>
        {data.map((item, idx) => (
          <View style={styles.tableRow} key={idx}>
            <Text style={styles.tableCol}>{item.campaign}</Text>
            <Text style={styles.tableCol}>{item.impressions}</Text>
            <Text style={styles.tableCol}>{item.clicks}</Text>
            <Text style={styles.tableCol}>{item.ctr.toFixed(2)}%</Text>
            <Text style={styles.tableCol}>{item.conversions}</Text>
            <Text style={styles.tableCol}>${item.cpc.toFixed(2)}</Text>
            <Text style={styles.tableCol}>{item.status}</Text>
          </View>
        ))}
      </View>
    </Page>
  </Document>
)
