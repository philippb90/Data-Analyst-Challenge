#!/bin/bash

# Create logs directory if it doesn't exist
mkdir -p backend/logs

# Create or truncate log files
touch backend/logs/error.log
touch backend/logs/combined.log

# Set appropriate permissions
chmod 644 backend/logs/error.log
chmod 644 backend/logs/combined.log

# Create log rotation configuration
cat > /etc/logrotate.d/bob-analytics << EOF
/path/to/backend/logs/*.log {
    daily
    missingok
    rotate 7
    compress
    delaycompress
    notifempty
    create 644 root root
    sharedscripts
    postrotate
        systemctl reload bob-analytics > /dev/null 2>&1 || true
    endscript
}
EOF

echo "Logger configuration updated successfully"
