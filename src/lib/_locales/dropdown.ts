interface I18nConfig {
    empty: string;
    nomatch: string;
    max: (max: number) => string;
    fetchBefore: string;
    fetchQuery: (minQuery: number, inputLength: number) => string;
    fetchInit: string;
    fetchEmpty: string;
    collapsedSelection: (count: number) => string;
    createRowLabel: (value: string) => string;
    aria_selected: (opts: string[]) => string;
    aria_listActive: (opt: object, labelField: string, resultCount: number) => string;
    aria_inputFocused: () => string;
    aria_label: string;
    aria_describedby: string;
  }


const en: I18nConfig = {
    empty: 'No options',
    nomatch: 'No matching options',
    max: (max) => `Maximum items ${max} selected`,
    fetchBefore: 'Type to search',
    fetchQuery: (minQuery, inputLength) => `Type ${minQuery > 1 ? `at least ${minQuery} characters ` : ''}to search (typed ${inputLength} characters)`,
    fetchInit: 'Initializing search...',
    fetchEmpty: 'No data related to your search',
    collapsedSelection: (count) => `${count} selected`,
    createRowLabel: (value) => `Create '${value}'`,
    aria_selected: (opts) => `${opts.length} options selected: ${opts.join(', ')}`,
    aria_listActive: (opt, labelField, resultCount) => `Option is active, ${resultCount} total results`,
    aria_inputFocused: () => 'Input is focused',
    aria_label: 'Dropdown',
    aria_describedby: 'This is a dropdown menu'
  };

const vi: I18nConfig = {
    empty: 'Không có tùy chọn',
    nomatch: 'Không có tùy chọn phù hợp',
    max: (max) => `Đã chọn tối đa ${max} mục`,
    fetchBefore: 'Gõ để tìm kiếm',
    fetchQuery: (minQuery, inputLength) => `Gõ ${minQuery > 1 ? `ít nhất ${minQuery} ký tự ` : ''}để tìm kiếm (đã gõ ${inputLength} ký tự)`,
    fetchInit: 'Đang khởi tạo tìm kiếm...',
    fetchEmpty: 'Không có dữ liệu liên quan đến tìm kiếm của bạn',
    collapsedSelection: (count) => `${count} đã chọn`,
    createRowLabel: (value) => `Tạo '${value}'`,
    aria_selected: (opts) => `Đã chọn ${opts.length} tùy chọn: ${opts.join(', ')}`,
    aria_listActive: (opt, labelField, resultCount) => `Tùy chọn đang hoạt động, tổng cộng ${resultCount} kết quả`,
    aria_inputFocused: () => 'Đang tập trung vào đầu vào',
    aria_label: 'Danh sách thả xuống',
    aria_describedby: 'Đây là một menu thả xuống'
  };

export default { en, vi }