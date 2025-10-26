# Data Storage

This directory stores user-contributed word suggestions.

## Structure

### contributions.json
Stores all word suggestions submitted through the contribute form.

**Format:**
```json
[
  {
    "id": "1234567890",
    "timestamp": "2024-01-01T12:00:00.000Z",
    "word": "example",
    "status": "pending"
  }
]
```

**Fields:**
- `id`: Unique identifier (timestamp-based)
- `timestamp`: ISO 8601 formatted date/time
- `word`: The suggested word
- `status`: Current status (pending, approved, rejected)

## Notes

- The `contributions.json` file is gitignored to prevent sensitive data from being committed
- The file is automatically created when the first contribution is submitted
- All contributions are stored locally in this JSON file

