# Pagination Component

A navigation component for paginating through data sets.

## Features

- Previous/Next navigation
- Current page range display
- Total items count
- Optional items per page display
- Disabled states for boundary pages
- Accessible with ARIA labels

## Usage

```tsx
import { Pagination } from "@/components/ui/pagination";

function MyComponent() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <Pagination
      currentPage={currentPage}
      totalItems={100}
      itemsPerPage={10}
      onPageChange={setCurrentPage}
    />
  );
}
```

## Props

- `currentPage`: Current active page number
- `totalItems`: Total number of items in the dataset
- `itemsPerPage`: Number of items to display per page
- `onPageChange`: Callback function when page changes
- `showItemsPerPage`: Optional boolean to show/hide items per page label (default: true)
- `className`: Optional additional CSS classes
