
function getAsmOpcode(opcode) {
    if (!opcode) return;
    switch (opcode.toUpperCase()) {
        case "ADD":
            return {
                "url": "http://infocenter.arm.com/help/index.jsp?topic=/com.arm.doc.dui0204j/Cihcjfjg.html",
                "html": "<p>Adds without Carry.</p>",
                "tooltip": "Adds without Carry."
            };
        case "ADDS":
            return {
                "url": "http://infocenter.arm.com/help/index.jsp?topic=/com.arm.doc.dui0204j/Cihcjfjg.html",
                "html": "<p>Adds without Carry. Updates the condition flag on the result of the operation.</p>",
                "tooltip": "Adds without Carry. Updates the condition flag on the result of the operation."
            };
        case "SUB":
            return {
                "url": "http://infocenter.arm.com/help/index.jsp?topic=/com.arm.doc.dui0204j/Cihcjfjg.html",
                "html": "<p>Subtracts without Carry.</p>",
                "tooltip": "Subtracts without Carry."
            };
        case "SUBS":
            return {
                "url": "http://infocenter.arm.com/help/index.jsp?topic=/com.arm.doc.dui0204j/Cihcjfjg.html",
                "html": "<p>Subtracts without Carry. Updates the condition flag on the result of the operation.</p>",
                "tooltip": "Subtracts without Carry. Updates the condition flag on the result of the operation."
            };
        case "RSB":
            return {
                "url": "http://infocenter.arm.com/help/index.jsp?topic=/com.arm.doc.dui0204j/Cihcjfjg.html",
                "html": "<p>Reverse subtracts without Carry.</p>",
                "tooltip": "Reverse subtracts without Carry."
            };
        case "RSBS":
            return {
                "url": "http://infocenter.arm.com/help/index.jsp?topic=/com.arm.doc.dui0204j/Cihcjfjg.html",
                "html": "<p>Reverse subtracts without Carry. Updates the condition flag on the result of the operation.</p>",
                "tooltip": "Reverse subtracts without Carry. Updates the condition flag on the result of the operation."
            };
        case "ADC":
            return {
                "url": "http://infocenter.arm.com/help/index.jsp?topic=/com.arm.doc.dui0204j/Cihcjfjg.html",
                "html": "<p>Adds with Carry.</p>",
                "tooltip": "Adds with Carry."
            };
        case "ADCS":
            return {
                "url": "http://infocenter.arm.com/help/index.jsp?topic=/com.arm.doc.dui0204j/Cihcjfjg.html",
                "html": "<p>Adds with Carry. Updates the condition flag on the result of the operation.</p>",
                "tooltip": "Adds with Carry. Updates the condition flag on the result of the operation."
            };
        case "SBC":
            return {
                "url": "http://infocenter.arm.com/help/index.jsp?topic=/com.arm.doc.dui0204j/Cihcjfjg.html",
                "html": "<p>Subtracts with Carry.</p>",
                "tooltip": "Subtracts with Carry."
            };
        case "SBCS":
            return {
                "url": "http://infocenter.arm.com/help/index.jsp?topic=/com.arm.doc.dui0204j/Cihcjfjg.html",
                "html": "<p>Subtracts with Carry. Updates the condition flag on the result of the operation.</p>",
                "tooltip": "Subtracts with Carry. Updates the condition flag on the result of the operation."
            };
        case "RSC":
            return {
                "url": "http://infocenter.arm.com/help/index.jsp?topic=/com.arm.doc.dui0204j/Cihcjfjg.html",
                "html": "<p>Reverse subtracts with Carry.</p>",
                "tooltip": "Reverse subtracts with Carry."
            };
        case "RSCS":
            return {
                "url": "http://infocenter.arm.com/help/index.jsp?topic=/com.arm.doc.dui0204j/Cihcjfjg.html",
                "html": "<p>Reverse subtracts with Carry. Updates the condition flag on the result of the operation.</p>",
                "tooltip": "Reverse subtracts with Carry. Updates the condition flag on the result of the operation."
            };
        case "ADR":
            return {
                "url": "http://infocenter.arm.com/help/index.jsp?topic=/com.arm.doc.dui0204j/Babcjaii.html",
                "html": "<p>Adds an immediate value to the pc value, and writes the result to the destination register.</p>",
                "tooltip": "Adds an immediate value to the pc value, and writes the result to the destination register."
            };
        case "ADRL":
            return {
                "url": "http://infocenter.arm.com/help/index.jsp?topic=/com.arm.doc.dui0204j/Cacecdga.html",
                "html": "<p>Loads a program-relative or register-relative address into a register. It is similar to the ADR instruction. ADRL can load a wider range of addresses than ADR because it generates two data processing instructions.</p>",
                "tooltip": "Loads a program-relative or register-relative address into a register. It is similar to the ADR instruction. ADRL can load a wider range of addresses than ADR because it generates two data processing instructions."
            };
        case "AND":
            return {
                "url": "http://infocenter.arm.com/help/index.jsp?topic=/com.arm.doc.dui0204j/Cihdafai.html",
                "html": "<p>Logical AND.</p>",
                "tooltip": "Logical AND."
            };
        case "ANDS":
            return {
                "url": "http://infocenter.arm.com/help/index.jsp?topic=/com.arm.doc.dui0204j/Cihdafai.html",
                "html": "<p>Logical AND. Updates the condition flag on the result of the operation.</p>",
                "tooltip": "Logical AND. Updates the condition flag on the result of the operation."
            };
        case "ORR":
            return {
                "url": "http://infocenter.arm.com/help/index.jsp?topic=/com.arm.doc.dui0204j/Cihdafai.html",
                "html": "<p>Logical OR.</p>",
                "tooltip": "Logical OR."
            };
        case "ORRS":
            return {
                "url": "http://infocenter.arm.com/help/index.jsp?topic=/com.arm.doc.dui0204j/Cihdafai.html",
                "html": "<p>Logical OR. Updates the condition flag on the result of the operation.</p>",
                "tooltip": "Logical OR. Updates the condition flag on the result of the operation."
            };
        case "EOR":
            return {
                "url": "http://infocenter.arm.com/help/index.jsp?topic=/com.arm.doc.dui0204j/Cihdafai.html",
                "html": "<p>Logical Exclusive OR.</p>",
                "tooltip": "Logical Exclusive OR."
            };
        case "EORS":
            return {
                "url": "http://infocenter.arm.com/help/index.jsp?topic=/com.arm.doc.dui0204j/Cihdafai.html",
                "html": "<p>Logical Exclusive OR. Updates the condition flag on the result of the operation.</p>",
                "tooltip": "Logical Exclusive OR. Updates the condition flag on the result of the operation."
            };
        case "BIC":
            return {
                "url": "http://infocenter.arm.com/help/index.jsp?topic=/com.arm.doc.dui0204j/Cihdafai.html",
                "html": "<p>Logical AND NOT.</p>",
                "tooltip": "Logical AND NOT."
            };
        case "BICS":
            return {
                "url": "http://infocenter.arm.com/help/index.jsp?topic=/com.arm.doc.dui0204j/Cihdafai.html",
                "html": "<p>Logical AND NOT. Updates the condition flag on the result of the operation.</p>",
                "tooltip": "Logical AND NOT. Updates the condition flag on the result of the operation."
            };
        case "ORN":
            return {
                "url": "http://infocenter.arm.com/help/index.jsp?topic=/com.arm.doc.dui0204j/Cihdafai.html",
                "html": "<p>Logical OR NOT.</p>",
                "tooltip": "Logical OR NOT."
            };
        case "ORNS":
            return {
                "url": "http://infocenter.arm.com/help/index.jsp?topic=/com.arm.doc.dui0204j/Cihdafai.html",
                "html": "<p>Logical OR NOT. Updates the condition flag on the result of the operation.</p>",
                "tooltip": "Logical OR NOT. Updates the condition flag on the result of the operation."
            };
        case "ASR":
            return {
                "url": "http://infocenter.arm.com/help/index.jsp?topic=/com.arm.doc.dui0204j/Cjacbgca.html",
                "html": "<p>Provides the signed value of the contents of a register divided by a power of two. It copies the sign bit into vacated bit positions on the left.</p>",
                "tooltip": "Provides the signed value of the contents of a register divided by a power of two. It copies the sign bit into vacated bit positions on the left."
            };
        case "ASRS":
            return {
                "url": "http://infocenter.arm.com/help/index.jsp?topic=/com.arm.doc.dui0204j/Cjacbgca.html",
                "html": "<p>Provides the signed value of the contents of a register divided by a power of two. It copies the sign bit into vacated bit positions on the left. Updates the condition flag on the result of the operation.</p>",
                "tooltip": "Provides the signed value of the contents of a register divided by a power of two. It copies the sign bit into vacated bit positions on the left. Updates the condition flag on the result of the operation."
            };
        case "LSL":
            return {
                "url": "http://infocenter.arm.com/help/index.jsp?topic=/com.arm.doc.dui0204j/Cjacbgca.html",
                "html": "<p>Provides the value of a register multiplied by a power of two. It inserts zeros into the vacated bit positions.</p>",
                "tooltip": "Provides the value of a register multiplied by a power of two. It inserts zeros into the vacated bit positions."
            };
        case "LSLS":
            return {
                "url": "http://infocenter.arm.com/help/index.jsp?topic=/com.arm.doc.dui0204j/Cjacbgca.html",
                "html": "<p>Provides the value of a register multiplied by a power of two. It inserts zeros into the vacated bit positions. Updates the condition flag on the result of the operation.</p>",
                "tooltip": "Provides the value of a register multiplied by a power of two. It inserts zeros into the vacated bit positions. Updates the condition flag on the result of the operation."
            };
        case "LSR":
            return {
                "url": "http://infocenter.arm.com/help/index.jsp?topic=/com.arm.doc.dui0204j/Cjacbgca.html",
                "html": "<p>Provides the unsigned value of a register divided by a variable power of two. It inserts zeros into the vacated bit positions.</p>",
                "tooltip": "Provides the unsigned value of a register divided by a variable power of two. It inserts zeros into the vacated bit positions."
            };
        case "LSRS":
            return {
                "url": "http://infocenter.arm.com/help/index.jsp?topic=/com.arm.doc.dui0204j/Cjacbgca.html",
                "html": "<p>Provides the unsigned value of a register divided by a variable power of two. It inserts zeros into the vacated bit positions. Updates the condition flag on the result of the operation.</p>",
                "tooltip": "Provides the unsigned value of a register divided by a variable power of two. It inserts zeros into the vacated bit positions. Updates the condition flag on the result of the operation."
            };
        case "ROR":
            return {
                "url": "http://infocenter.arm.com/help/index.jsp?topic=/com.arm.doc.dui0204j/Cjacbgca.html",
                "html": "<p>Provides the value of the contents of a register rotated by a value. The bits that are rotated off the right end are inserted into the vacated bit positions on the left.</p>",
                "tooltip": "Provides the value of the contents of a register rotated by a value. The bits that are rotated off the right end are inserted into the vacated bit positions on the left."
            };
        case "RORS":
            return {
                "url": "http://infocenter.arm.com/help/index.jsp?topic=/com.arm.doc.dui0204j/Cjacbgca.html",
                "html": "<p>Provides the value of the contents of a register rotated by a value. The bits that are rotated off the right end are inserted into the vacated bit positions on the left. Updates the condition flag on the result of the operation.</p>",
                "tooltip": "Provides the value of the contents of a register rotated by a value. The bits that are rotated off the right end are inserted into the vacated bit positions on the left. Updates the condition flag on the result of the operation."
            };
        case "RRX":
            return {
                "url": "http://infocenter.arm.com/help/index.jsp?topic=/com.arm.doc.dui0204j/Cjacbgca.html",
                "html": "<p>Provides the value of the contents of a register shifted right one bit. The old carry flag is shifted into bit[31].</p>",
                "tooltip": "Provides the value of the contents of a register shifted right one bit. The old carry flag is shifted into bit[31]."
            };
        case "RRXS":
            return {
                "url": "http://infocenter.arm.com/help/index.jsp?topic=/com.arm.doc.dui0204j/Cjacbgca.html",
                "html": "<p>Provides the value of the contents of a register shifted right one bit. The old carry flag is shifted into bit[31]. The old bit[0] is placed in the carry flag. Updates the condition flag on the result of the operation.</p>",
                "tooltip": "Provides the value of the contents of a register shifted right one bit. The old carry flag is shifted into bit[31]. The old bit[0] is placed in the carry flag. Updates the condition flag on the result of the operation."
            };
        case "B":
        case "BLT":
        case "BGE":
        case "BEQ":
        case "BNE":
        case "BGT":
        case "BLE":
            return {
                "url": "http://infocenter.arm.com/help/index.jsp?topic=/com.arm.doc.dui0204j/Cihfddaf.html",
                "html": "<p>Branches to a specified label.</p>",
                "tooltip": "Branches to a specified label."
            };
        case "BL":
            return {
                "url": "http://infocenter.arm.com/help/index.jsp?topic=/com.arm.doc.dui0204j/Cihfddaf.html",
                "html": "<p>Branches to a specified label. Copies the address of the next instruction into lr (r14, the link register).</p>",
                "tooltip": "Branches to a specified label. Copies the address of the next instruction into lr (r14, the link register)."
            };
        case "BX":
            return {
                "url": "http://infocenter.arm.com/help/index.jsp?topic=/com.arm.doc.dui0204j/Cihfddaf.html",
                "html": "<p>Branches to a specified label. Can change the processor state from ARM to Thumb, or from Thumb to ARM.</p>",
                "tooltip": "Branches to a specified label. Can change the processor state from ARM to Thumb, or from Thumb to ARM."
            };
        case "BLX":
            return {
                "url": "http://infocenter.arm.com/help/index.jsp?topic=/com.arm.doc.dui0204j/Cihfddaf.html",
                "html": "<p>Branches to a specified label. Can change the processor state from ARM to Thumb, or from Thumb to ARM. Copies the address of the next instruction into lr (r14, the link register).</p>",
                "tooltip": "Branches to a specified label. Can change the processor state from ARM to Thumb, or from Thumb to ARM. Copies the address of the next instruction into lr (r14, the link register)."
            };
        case "BXJ":
            return {
                "url": "http://infocenter.arm.com/help/index.jsp?topic=/com.arm.doc.dui0204j/Cihfddaf.html",
                "html": "<p>Branches to a specified label. Changes the processor state to Jazelle.</p>",
                "tooltip": "Branches to a specified label. Changes the processor state to Jazelle."
            };
        case "BFC":
            return {
                "url": "http://infocenter.arm.com/help/index.jsp?topic=/com.arm.doc.dui0204j/Cjagchif.html",
                "html": "<p>Clears adjacent bits in a register.</p>",
                "tooltip": "Clears adjacent bits in a register."
            };
        case "BFI":
            return {
                "url": "http://infocenter.arm.com/help/index.jsp?topic=/com.arm.doc.dui0204j/Cjagchif.html",
                "html": "<p>Inserts adjacent bits from one register into another.</p>",
                "tooltip": "Inserts adjacent bits from one register into another."
            };
        case "BKPT":
            return {
                "url": "http://infocenter.arm.com/help/index.jsp?topic=/com.arm.doc.dui0204j/Cihbiggi.html",
                "html": "<p>Causes the processor to enter Debug state. Debug tools can use this to investigate system state when the instruction at a particular address is reached.</p>",
                "tooltip": "Causes the processor to enter Debug state. Debug tools can use this to investigate system state when the instruction at a particular address is reached."
            };
        case "CBZ":
            return {
                "url": "http://infocenter.arm.com/help/index.jsp?topic=/com.arm.doc.dui0204j/Cjaghefc.html",
                "html": "<p>Compare and Branch on Zero.</p>",
                "tooltip": "Compare and Branch on Zero."
            };
        case "CBNZ":
            return {
                "url": "http://infocenter.arm.com/help/index.jsp?topic=/com.arm.doc.dui0204j/Cjaghefc.html",
                "html": "<p>Compare and Branch on Non-Zero.</p>",
                "tooltip": "Compare and Branch on Non-Zero."
            };
        case "CDP":
            return {
                "url": "http://infocenter.arm.com/help/index.jsp?topic=/com.arm.doc.dui0204j/Cihijbbe.html",
                "html": "<p>Coprocessor data operations: Use of this instruction depends on the coprocessor. See the coprocessor documentation for details.</p>",
                "tooltip": "Coprocessor data operations: Use of this instruction depends on the coprocessor. See the coprocessor documentation for details.."
            };
        case "CDP2":
            return {
                "url": "http://infocenter.arm.com/help/index.jsp?topic=/com.arm.doc.dui0204j/Cihijbbe.html",
                "html": "<p>Coprocessor data operations: Use of this instruction depends on the coprocessor. See the coprocessor documentation for details.</p>",
                "tooltip": "Coprocessor data operations: Use of this instruction depends on the coprocessor. See the coprocessor documentation for details."
            };
        case "CHKA":
            return {
                "url": "http://infocenter.arm.com/help/index.jsp?topic=/com.arm.doc.dui0204j/CJABHABH.html",
                "html": "<p>Compares the unsigned values in two registers. If the value in the first register is lower than, or the same as, the second, it copies the pc to the lr, and causes a branch to the IndexCheck handler.</p>",
                "tooltip": "Compares the unsigned values in two registers. If the value in the first register is lower than, or the same as, the second, it copies the pc to the lr, and causes a branch to the IndexCheck handler."
            };
        case "CLREX":
            return {
                "url": "http://infocenter.arm.com/help/index.jsp?topic=/com.arm.doc.dui0204j/Cjacahbf.html",
                "html": "<p>Clears the local record of the executing processor that an address has had a request for an exclusive access.</p>",
                "tooltip": "Clears the local record of the executing processor that an address has had a request for an exclusive access."
            };
        case "CLZ":
            return {
                "url": "http://infocenter.arm.com/help/index.jsp?topic=/com.arm.doc.dui0204j/Cihjgjed.html",
                "html": "<p>Counts the number of leading zeros in the value in Rm and returns the result in Rd. The result value is 32 if no bits are set in the source register, and zero if bit 31 is set.</p>",
                "tooltip": "Counts the number of leading zeros in the value in Rm and returns the result in Rd. The result value is 32 if no bits are set in the source register, and zero if bit 31 is set."
            };
        case "CMP":
            return {
                "url": "http://infocenter.arm.com/help/index.jsp?topic=/com.arm.doc.dui0204j/Cihiddid.html",
                "html": "<p>Compares two values by subtracting.</p>",
                "tooltip": "Compares two values by subtracting."
            };
        case "CMN":
            return {
                "url": "http://infocenter.arm.com/help/index.jsp?topic=/com.arm.doc.dui0204j/Cihiddid.html",
                "html": "<p>Compares two values by adding.</p>",
                "tooltip": "Compares two values by adding."
            };
        case "CPS":
            return {
                "url": "http://infocenter.arm.com/help/index.jsp?topic=/com.arm.doc.dui0204j/Cihfdbhd.html",
                "html": "<p>Changes one or more of the mode, A, I, and F bits in the CPSR, without changing the other CPSR bits.</p>",
                "tooltip": "Changes one or more of the mode, A, I, and F bits in the CPSR, without changing the other CPSR bits."
            };
        case "DBG":
            return {
                "url": "http://infocenter.arm.com/help/index.jsp?topic=/com.arm.doc.dui0204j/CIHJFGFE.html",
                "html": "<p>Provides a hint to debug and related systems. See their documentation for what use (if any) they make of this instruction.</p>",
                "tooltip": "Provides a hint to debug and related systems. See their documentation for what use (if any) they make of this instruction."
            };
        case "DMB":
            return {
                "url": "http://infocenter.arm.com/help/index.jsp?topic=/com.arm.doc.dui0204j/CIHJFGFE.html",
                "html": "<p>Acts as a memory barrier. It ensures that all explicit memory accesses that appear in program order before the DMB instruction are observed before any explicit memory accesses that appear in program order after the DMB instruction. It does not affect the ordering of any other instructions executing on the processor.</p>",
                "tooltip": "Acts as a memory barrier. It ensures that all explicit memory accesses that appear in program order before the DMB instruction are observed before any explicit memory accesses that appear in program order after the DMB instruction. It does not affect the ordering of any other instructions executing on the processor."
            };
        case "DSB":
            return {
                "url": "http://infocenter.arm.com/help/index.jsp?topic=/com.arm.doc.dui0204j/CIHJFGFE.html",
                "html": "<p>Acts as a special kind of memory barrier. No instruction in program order after this instruction executes until this instruction completes. This instruction completes when all explicit memory accesses before this instruction complete and all Cache, Branch predictor and TLB maintenance operations before this instruction complete.</p>",
                "tooltip": "Acts as a special kind of memory barrier. No instruction in program order after this instruction executes until this instruction completes. This instruction completes when all explicit memory accesses before this instruction complete and all Cache, Branch predictor and TLB maintenance operations before this instruction complete."
            };
        case "ISB":
            return {
                "url": "http://infocenter.arm.com/help/index.jsp?topic=/com.arm.doc.dui0204j/CIHJFGFE.html",
                "html": "<p>Flushes the pipeline in the processor, so that all instructions following the ISB are fetched from cache or memory, after the instruction has been completed. It ensures that the effects of context altering operations, such as changing the ASID, or completed TLB maintenance operations, or branch predictor maintenance operations, as well as all changes to the CP15 registers, executed before the ISB instruction are visible to the instructions fetched after the ISB. In addition, the ISB instruction ensures that any branches that appear in program order after it are always written into the branch prediction logic with the context that is visible after the ISB instruction. This is required to ensure correct execution of the instruction stream.</p>",
                "tooltip": "Flushes the pipeline in the processor, so that all instructions following the ISB are fetched from cache or memory, after the instruction has been completed. It ensures that the effects of context altering operations, such as changing the ASID, or completed TLB maintenance operations, or branch predictor maintenance operations, as well as all changes to the CP15 registers, executed before the ISB instruction are visible to the instructions fetched after the ISB. In addition, the ISB instruction ensures that any branches that appear in program order after it are always written into the branch prediction logic with the context that is visible after the ISB instruction. This is required to ensure correct execution of the instruction stream."
            };
        case "ENTERX":
            return {
                "url": "http://infocenter.arm.com/help/index.jsp?topic=/com.arm.doc.dui0204j/CJAICHJD.html",
                "html": "<p>Causes a change from Thumb state to ThumbEE state, or has no effect in ThumbEE state.</p>",
                "tooltip": "Causes a change from Thumb state to ThumbEE state, or has no effect in ThumbEE state."
            };
        case "LEAVEX":
            return {
                "url": "http://infocenter.arm.com/help/index.jsp?topic=/com.arm.doc.dui0204j/CJAICHJD.html",
                "html": "<p>Causes a change from ThumbEE state to Thumb state, or has no effect in Thumb state.</p>",
                "tooltip": "Causes a change from ThumbEE state to Thumb state, or has no effect in Thumb state."
            };
        case "HB":
            return {
                "url": "http://infocenter.arm.com/help/index.jsp?topic=/com.arm.doc.dui0204j/CJAIFEGE.html",
                "html": "<p>Branches to a specified handler.</p>",
                "tooltip": "Branches to a specified handler."
            };
        case "HBL":
            return {
                "url": "http://infocenter.arm.com/help/index.jsp?topic=/com.arm.doc.dui0204j/CJAIFEGE.html",
                "html": "<p>Branches to a specified handler. Copies the address of the next instruction into lr (r14, the link register).</p>",
                "tooltip": "Branches to a specified handler. Copies the address of the next instruction into lr (r14, the link register)."
            };
        case "HBLP":
            return {
                "url": "http://infocenter.arm.com/help/index.jsp?topic=/com.arm.doc.dui0204j/CJAIFEGE.html",
                "html": "<p>Branches to a specified handler. Copies the address of the next instruction into lr (r14, the link register). Passes the value of immed to the handler in r8.</p>",
                "tooltip": "Branches to a specified handler. Copies the address of the next instruction into lr (r14, the link register). Passes the value of immed to the handler in r8."
            };
        case "HBP":
            return {
                "url": "http://infocenter.arm.com/help/index.jsp?topic=/com.arm.doc.dui0204j/CJAIFEGE.html",
                "html": "<p>Branches to a specified handler. Passes the value of immed to the handler in r8.</p>",
                "tooltip": "Branches to a specified handler. Passes the value of immed to the handler in r8."
            };
        case "IT":
            return {
                "url": "http://infocenter.arm.com/help/index.jsp?topic=/com.arm.doc.dui0204j/Cjabicci.html",
                "html": "<p>Makes up to four following instructions (the IT block) conditional. The conditions can be all the same, or some of them can be the logical inverse of the others.</p>",
                "tooltip": "Makes up to four following instructions (the IT block) conditional. The conditions can be all the same, or some of them can be the logical inverse of the others."
            };
        case "LDC":
            return {
                "url": "http://infocenter.arm.com/help/index.jsp?topic=/com.arm.doc.dui0204j/Cihehjca.html",
                "html": "<p>Transfer Data between memory and Coprocessor: Use of these instructions depends on the coprocessor. See the coprocessor documentation for details.</p>",
                "tooltip": "Transfer Data between memory and Coprocessor: Use of these instructions depends on the coprocessor. See the coprocessor documentation for details."
            };
        case "LDC2":
            return {
                "url": "http://infocenter.arm.com/help/index.jsp?topic=/com.arm.doc.dui0204j/Cihehjca.html",
                "html": "<p>Transfer Data between memory and Coprocessor: Use of these instructions depends on the coprocessor. See the coprocessor documentation for details.</p>",
                "tooltip": "Transfer Data between memory and Coprocessor: Use of these instructions depends on the coprocessor. See the coprocessor documentation for details."
            };
        case "STC":
            return {
                "url": "http://infocenter.arm.com/help/index.jsp?topic=/com.arm.doc.dui0204j/Cihehjca.html",
                "html": "<p>Transfer Data between memory and Coprocessor: Use of these instructions depends on the coprocessor. See the coprocessor documentation for details.</p>",
                "tooltip": "Transfer Data between memory and Coprocessor: Use of these instructions depends on the coprocessor. See the coprocessor documentation for details."
            };
        case "STC2":
            return {
                "url": "http://infocenter.arm.com/help/index.jsp?topic=/com.arm.doc.dui0204j/Cihehjca.html",
                "html": "<p>Transfer Data between memory and Coprocessor: Use of these instructions depends on the coprocessor. See the coprocessor documentation for details.</p>",
                "tooltip": "Transfer Data between memory and Coprocessor: Use of these instructions depends on the coprocessor. See the coprocessor documentation for details."
            };
        case "LDM":
        case "LDMIA":
        case "LDMFD":
        case "LDMIB":
        case "LDMDA":
        case "LDMDB":
            return {
                "url": "http://infocenter.arm.com/help/index.jsp?topic=/com.arm.doc.dui0204j/Cihcadda.html",
                "html": "<p>Load Multiple registers. Any combination of registers r0 to r15 can be transferred in ARM state, but there are some restrictions in Thumb state.</p>",
                "tooltip": "Load Multiple registers. Any combination of registers r0 to r15 can be transferred in ARM state, but there are some restrictions in Thumb state."
            };
        case "STM":
        case "STMIA":
        case "STMFD":
        case "STMIB":
        case "STMDA":
        case "STMDB":
            return {
                "url": "http://infocenter.arm.com/help/index.jsp?topic=/com.arm.doc.dui0204j/Cihcadda.html",
                "html": "<p>Store Multiple registers. Any combination of registers r0 to r15 can be transferred in ARM state, but there are some restrictions in Thumb state.</p>",
                "tooltip": "Store Multiple registers. Any combination of registers r0 to r15 can be transferred in ARM state, but there are some restrictions in Thumb state."
            };
        case "LDR":
        case "LDRB":
        case "LDRSB":
        case "LDRH":
        case "LDRSH":
        case "LDRBT":
        case "LDRD":
        case "LDRHT":
        case "LDRSHT":
        case "LDRSBT":
        case "LDRT":
            return {
                "url": "http://infocenter.arm.com/help/index.jsp?topic=/com.arm.doc.dui0204j/Chdhbfcd.html",
                "html": "<p>Loads a value from a location.</p>",
                "tooltip": "Loads a value from a location."
            };
        case "STR":
        case "STRB":
        case "STRSB":
        case "STRH":
        case "STRSH":
        case "STRBT":
        case "STRD":
        case "STRHT":
        case "STRSHT":
        case "STRSBT":
        case "STRT":
            return {
                "url": "http://infocenter.arm.com/help/index.jsp?topic=/com.arm.doc.dui0204j/Chdhbfcd.html",
                "html": "<p>Stores a value into a location.</p>",
                "tooltip": "Stores a value into a location."
            };
        case "LDREX":
        case "LDREXB":
        case "LDREXH":
        case "LDREXD":
            return {
                "url": "http://infocenter.arm.com/help/index.jsp?topic=/com.arm.doc.dui0204j/Cihbghef.html",
                "html": "<p>Performs an exclusive load from memory.</p>",
                "tooltip": "Performs an exclusive load from memory."
            };
        case "STREX":
        case "STREXB":
        case "STREXH":
        case "STREXD":
            return {
                "url": "http://infocenter.arm.com/help/index.jsp?topic=/com.arm.doc.dui0204j/Cihbghef.html",
                "html": "<p>Performs a conditional write to memory.</p>",
                "tooltip": "Performs a conditional write to memory."
            };
        case "MAR":
            return {
                "url": "http://infocenter.arm.com/help/index.jsp?topic=/com.arm.doc.dui0204j/Cihbfjff.html",
                "html": "<p>Copies the contents of RdLo to bits[31:0] of Acc, and the least significant byte of RdHi to bits[39:32] of Acc.</p>",
                "tooltip": "Copies the contents of RdLo to bits[31:0] of Acc, and the least significant byte of RdHi to bits[39:32] of Acc."
            };
        case "MRA":
            return {
                "url": "http://infocenter.arm.com/help/index.jsp?topic=/com.arm.doc.dui0204j/Cihbfjff.html",
                "html": "<p>Copies bits[31:0] of Acc to RdLo, copies bits[39:32] of Acc to RdHi bits[7:0], and sign extends the value by copying bit[39] of Acc to bits[31:8] of RdHi.</p>",
                "tooltip": "Copies bits[31:0] of Acc to RdLo, copies bits[39:32] of Acc to RdHi bits[7:0], and sign extends the value by copying bit[39] of Acc to bits[31:8] of RdHi."
            };
        case "MCR":
            return {
                "url": "http://infocenter.arm.com/help/index.jsp?topic=/com.arm.doc.dui0204j/Cihfifej.html",
                "html": "<p>Move to Coprocessor from ARM Register or Registers: The use of these instructions depends on the coprocessor. See the coprocessor documentation for details.</p>",
                "tooltip": "Move to Coprocessor from ARM Register or Registers: The use of these instructions depends on the coprocessor. See the coprocessor documentation for details."
            };
        case "MCR2":
            return {
                "url": "http://infocenter.arm.com/help/index.jsp?topic=/com.arm.doc.dui0204j/Cihfifej.html",
                "html": "<p>Move to Coprocessor from ARM Register or Registers: The use of these instructions depends on the coprocessor. See the coprocessor documentation for details.</p>",
                "tooltip": "Move to Coprocessor from ARM Register or Registers: The use of these instructions depends on the coprocessor. See the coprocessor documentation for details."
            };
        case "MCRR":
            return {
                "url": "http://infocenter.arm.com/help/index.jsp?topic=/com.arm.doc.dui0204j/Cihfifej.html",
                "html": "<p>Move to Coprocessor from ARM Register or Registers: The use of these instructions depends on the coprocessor. See the coprocessor documentation for details.</p>",
                "tooltip": "Move to Coprocessor from ARM Register or Registers: The use of these instructions depends on the coprocessor. See the coprocessor documentation for details."
            };
        case "MCRR2":
            return {
                "url": "http://infocenter.arm.com/help/index.jsp?topic=/com.arm.doc.dui0204j/Cihfifej.html",
                "html": "<p>Move to Coprocessor from ARM Register or Registers: The use of these instructions depends on the coprocessor. See the coprocessor documentation for details.</p>",
                "tooltip": "Move to Coprocessor from ARM Register or Registers: The use of these instructions depends on the coprocessor. See the coprocessor documentation for details."
            };
        case "MIA":
            return {
                "url": "http://infocenter.arm.com/help/index.jsp?topic=/com.arm.doc.dui0204j/Cihffbgc.html",
                "html": "<p>Multiply with internal accumulate (32-bit by 32-bit, 40-bit accumulate).</p>",
                "tooltip": "Multiply with internal accumulate (32-bit by 32-bit, 40-bit accumulate)."
            };
        case "MIAPH":
            return {
                "url": "http://infocenter.arm.com/help/index.jsp?topic=/com.arm.doc.dui0204j/Cihffbgc.html",
                "html": "<p>Multiply with internal accumulate, packed halfwords (16-bit by 16-bit twice, 40-bit accumulate).</p>",
                "tooltip": "Multiply with internal accumulate, packed halfwords (16-bit by 16-bit twice, 40-bit accumulate)."
            };
        case "MIABB":
        case "MIABT":
        case "MIATB":
        case "MIATT":
            return {
                "url": "http://infocenter.arm.com/help/index.jsp?topic=/com.arm.doc.dui0204j/Cihffbgc.html",
                "html": "<p>Multiply with internal accumulate (16-bit by 16-bit, 40-bit accumulate).</p>",
                "tooltip": "Multiply with internal accumulate (16-bit by 16-bit, 40-bit accumulate)."
            };
        case "MUL":
            return {
                "url": "http://infocenter.arm.com/help/index.jsp?topic=/com.arm.doc.dui0204j/Cihihggj.html",
                "html": "<p>Multiplies the values from Rn and Rm, and places the least significant 32 bits of the result in Rd.</p>",
                "tooltip": "Multiplies the values from Rn and Rm, and places the least significant 32 bits of the result in Rd."
            };
        case "MLA":
            return {
                "url": "http://infocenter.arm.com/help/index.jsp?topic=/com.arm.doc.dui0204j/Cihihggj.html",
                "html": "<p>Multiplies the values from Rn and Rm, adds the value from Ra, and places the least significant 32 bits of the result in Rd.</p>",
                "tooltip": "Multiplies the values from Rn and Rm, adds the value from Ra, and places the least significant 32 bits of the result in Rd."
            };
        case "MLS":
            return {
                "url": "http://infocenter.arm.com/help/index.jsp?topic=/com.arm.doc.dui0204j/Cihihggj.html",
                "html": "<p>Multiplies the values from Rn and Rm, subtracts the result from the value from Ra, and places the least significant 32 bits of the final result in Rd.</p>",
                "tooltip": "Multiplies the values from Rn and Rm, subtracts the result from the value from Ra, and places the least significant 32 bits of the final result in Rd."
            };
        case "MOV":
            return {
                "url": "http://infocenter.arm.com/help/index.jsp?topic=/com.arm.doc.dui0204j/Cihcdbca.html",
                "html": "<p>Copies the value of Operand2 into Rd.</p>",
                "tooltip": "Copies the value of Operand2 into Rd."
            };
        case "MVN":
            return {
                "url": "http://infocenter.arm.com/help/index.jsp?topic=/com.arm.doc.dui0204j/Cihcdbca.html",
                "html": "<p>Takes the value of Operand2, performs a bitwise logical NOT operation on the value, and places the result into Rd.</p>",
                "tooltip": "Takes the value of Operand2, performs a bitwise logical NOT operation on the value, and places the result into Rd."
            };
        case "MOVT":
            return {
                "url": "http://infocenter.arm.com/help/index.jsp?topic=/com.arm.doc.dui0204j/Cjagdjbf.html",
                "html": "<p>Move Top. Writes a 16-bit immediate value to the top halfword of a register, without affecting the bottom halfword.</p>",
                "tooltip": "Move Top. Writes a 16-bit immediate value to the top halfword of a register, without affecting the bottom halfword."
            };
        //todo continue from MOV32/MRC
        case "SWP":
        case "SWPB":
            return {
                "url": "http://infocenter.arm.com/help/index.jsp?topic=/com.arm.doc.dui0204j/Chdbbbai.html",
                "html": "<p>Swaps data between registers and memory.</p>",
                "tooltip": "Swaps data between registers and memory."
            };
        case "SVC":
        case "SWI":
            return {
                "url": "http://infocenter.arm.com/help/index.jsp?topic=/com.arm.doc.dui0204j/Cihidabi.html",
                "html": "<p>Causes an exception. This means that the processor mode changes to Supervisor, the CPSR is saved to the Supervisor mode SPSR, and execution branches to the SVC vector.</p>",
                "tooltip": "Causes an exception. This means that the processor mode changes to Supervisor, the CPSR is saved to the Supervisor mode SPSR, and execution branches to the SVC vector."
            };
    }
}

module.exports = {
    getAsmOpcode: getAsmOpcode
};
