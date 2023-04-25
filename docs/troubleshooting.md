---
# Page settings
layout: default
keywords:
comments: false

# Hero section
title: Troubleshooting
description: Help Lunacy Support determine the cause of your issue
icon: 'system-report'

# Micro navigation
micro_nav: false

# Page navigation
page_nav:
    next:
        content: Contacts
        url: '/contact'
    prev:
        content: FAQs
        url: '/faq'
---

You can read about potential issues and ways to solve them in the <a href="https://lunacy.docs.icons8.com/faq/#questions-about-possible-issues" target="_blank">corresponding section</a> of the <a href="https://lunacy.docs.icons8.com/faq/" target="_blank">FAQ page</a>. 

If that doesn't help, our support team may need additional information about the cause of a crash or freeze event. In these cases, memory dump files are extremely helpful. This section goes over how to find them on different operating systems. 

## Important notes

### Reporting issues

You can **report any issue** you run into through our **feedback form**:
1. Un Lunacy, select **Help → Report an issue**.
2. Describe the problem and attach any screenshots, files, or the malfunctioning document. 

If Lunacy isn’t opening, leave a post on our <a href="https://community.icons8.com/" target="_blank">Community Support</a> board or reach out to us through <a href="https://lunacy.docs.icons8.com/contact/#our-socials" target="_blank">our socials</a>.

### Archiving memory dump files

Please **archive all dump files** before you send them to us. They may end up several GBs in size and sending them to a `.zip` archive reduces the size significantly. This also means you can upload and send over the files to us much faster. 

### Privacy and security

If you’re worried about the safety of any secret or sensitive information contained in memory dump files, avoid uploading the archive to unsafe servers and cloud storages:

1. Make sure to upload them to **trusted, secure cloud storages**.
2. Send us a **one-time download link** for the file. 
3. Once our team notifies you that we’ve received the file, feel free to **delete it from the cloud**. 

### Hardware and other issues

 Sometimes, a particular issue might persist even after Lunacy Support analyzes several memory dump files. This happens if the problem resulted from a specific driver and/or hardware problem on your computer. 
 
 An <a href="https://lunacy.docs.icons8.com/faq/#lunacy-wont-start-what-do-i-do" target="_blank">unstable/insider OS build</a> might also cause unfixable problems, and some external factors may also be an issue. 
 
 Rest assured that our team will do everything in their power to fix the issue—or point you towards possible hardware or external issues you can later investigate. 

## Windows

### Logs

If Lunacy crashes or freezes, the app logs will help us investigate the issue. Before reporting a crash:

1. In Lunacy, select **Help → Open App Data Folder** on the menu bar to open up Lunacy’s app data folder. You can also find it using the file path: `C:\\Users\\<user>AppData\\Local\\Icons8\\Lunacy`
2. Open the **Logs** folder.
3. Sort the files using the **Date modified** column, find the most recent log file saved after the crash occurred, and archive it.
4. Report the crash to us in any convenient way (for example, through **Help → Report a problem**) and attach the archive with the log file.

### Crash Dumps

In some cases, the log files won’t show any errors, but a crash dump will.
By default, these files are here:  `C:\\Users\\<user>AppData\\Local\\CrashDumps` 

Just as with the log file:

1. Find the last saved crash dump and archive it.
2. Attach it to your crash report.

### Full Crash Dumps

If your crash dumps weigh 500MB or less, they are most likely mini dumps and may not contain information about the error. If you regularly experience crashes, you can adjust your system settings so that Windows always generates full crash reports.

The files will be heavier, but there will be more information for developers, and once there’s a fix for the recurring issues, you can revert back to default settings.

To set your system to always generate full crash dumps:

1. Press `Win + R` to open the **Run** window.
2. Type `regedit` in the field that appears and press **OK**. The registry editor will open:
    <embed type="image/svg+xml" alt="registry_windows" src="https://cdn-eu.icons8.com/docs/Dko8QE6mZ06fz2gAGGUBbA/voKLGnITskm7NduB8OcNUQ.svg" width="844" /> 

3. Go to the folder `Computer\\HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows\\Windows Error Reporting\\LocalDumps`. If there’s no such folder, create it.
4. Add the global parameter `DumpType`, set its type `REG_DWORD` and the value to `2`.
    <embed type="image/svg+xml" alt="registry_parameter" src="https://cdn-eu.icons8.com/docs/Dko8QE6mZ06fz2gAGGUBbA/xZCAmcDfPEynzqmotstJLA.svg" width="844" /> 

5. Press **OK**.

Read more about <a href="https://learn.microsoft.com/en-us/windows/win32/wer/collecting-user-mode-dumps" target="_blank">collecting user-mode dumps on Windows</a>.

### Freeze Dumps

If the app freezes but doesn’t crash, our team will get the most information from a process memory dump, which is a dump file for a specific process.

To **generate a process dump file**:

1. Press `Ctrl + Shift + Esc` to open up the Task manager. Alternatively, press `Win + X` and select **Task Manager**.
2. Right-click the **Lunacy** process and select **Create Dump File**.
3. Once the file is successfully created, you’ll get a notification with the file path. 
4. Select **Open file location**.
5. Archive the file and attach it to your report.

## MacOS

### Logs

If Lunacy crashes or freezes on your Mac device, you can help us quickly determine the issue by providing a log file:

1. In Lunacy, select **Help → Open App Data Folder** on the menu bar to open up Lunacy’s app data folder. You can also find it using the file path: `/Users/<User>/Library/Containers/com.icons8.Lunacy/Data/.local/share/Icons8/Lunacy`
2. Open the **Logs** folder.
3. Sort the files using the **Date modified** column, find the most recent log file saved after the crash occurred, and archive it.
4. Report the crash to us in any convenient way (for example, through **Help → Report a problem**) and attach the archive with the log file.

### Crash Dumps

When log files don’t show any errors, we may need crash dumps to further narrow down the problem. They are in the `Library` folder by default. 

To **open it**:

1. Choose the **Go** menu, in the **Finder**.
2. The **Library** folder will appear in the menu list. 
3. Open the **Logs** folder, then the **DiagnosticReports** folder.
    <embed type="image/svg+xml" alt="mac_diagnostic_reports" src="https://cdn-eu.icons8.com/docs/Dko8QE6mZ06fz2gAGGUBbA/6jmnh7QL0k2y1WvnJCY5_g.svg" width="844" /> 

4. Sort the files using the **Date modified** column, find the most recent log file saved after the crash occurred, and archive it.
5. Report the crash to us in any convenient way and attach the archive with the log file.

## Ubuntu
### Logs

If Lunacy crashes or freezes on your Ubuntu system device, you can help us quickly determine the issue by providing a log file:

1. In Lunacy, select **Help → Open App Data Folder** on the menu bar to open up Lunacy’s app data folder. You can also find it using the file path: `/home/user/.local/share/Icons8/Lunacy`
2. Open the **Logs** folder.
3. Sort the files using the **Date modified** column, find the most recent log file saved after the crash occurred, and archive it.
4. Report the crash to us in any convenient way (for example, through **Help → Report a problem**) and attach the archive with the log file.

### Crash Dumps

When log files don’t show any errors, we may need crash dumps to further narrow down the problem. By default, these files are here: `var/crash/` 

**Open the `crash` folder**, then:

1. Sort the files using the **Date modified** column, find the most recent log file saved after the crash occurred, and archive it.
2. Report the crash to us in any convenient way and attach the archive with the log file.

**See also:**<br><a href="https://lunacy.docs.icons8.com/" target="_blank">FAQs</a>
